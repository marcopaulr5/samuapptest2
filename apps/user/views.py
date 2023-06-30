from cProfile import Profile
from django.conf import Settings, settings
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from rest_framework.exceptions import PermissionDenied

from django.db import transaction
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import authentication_classes
from google.oauth2 import id_token as google_id_token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from google.auth.transport import requests
from apps.user.models import UserAccount
from django.contrib.auth import get_user_model
User = get_user_model()


@authentication_classes([])
@permission_classes([AllowAny])
class GoogleLoginView(APIView):
    def post(self, request):
        id_token = request.data.get('id_token')
        if id_token:
            try:
                # Verificar el token de ID de Google y obtener la información de usuario

                info = google_id_token.verify_oauth2_token(
                    id_token, requests.Request(), settings.GOOGLE_CLIENT_ID)

                # Buscar una cuenta existente en la base de datos correspondiente al correo electrónico de Google
                user = User.objects.filter(email=info['email']).first()
                is_new_account = False

                if not user:
                    # Si no se encuentra un usuario con el correo electrónico de Google, crear uno nuevo
                    user = UserAccount(
                        email=info['email'], username=info['given_name'])
                    user.is_registered_with_google = True
                    user.username = info['given_name']
                    user.is_active = True

                    user.first_name = info['given_name']
                    is_new_account = True

                    user.save()
                    # crear el objeto de perfil usuario
                    with transaction.atomic():
                        Profile.objects.create(user=user)
                        Settings.objects.create(user=user)
                # Generar tokens de acceso y actualización para el usuario
                refresh = RefreshToken.for_user(user)
                access = refresh.access_token

                # Guardar el usuario en la base de datos

                user.save()

                # Devolver los tokens de acceso y actualización en un diccionario
                return Response({
                    'access': str(access),
                    'refresh': str(refresh),
                    'user': {
                        'id': user.id,
                        'email': user.email,
                        'nickname': user.nickname,
                        'first_name': user.first_name,
                        'last_name': user.last_name,
                        'date_joined': user.date_joined,
                        'is_active': user.is_active,
                        'is_staff': user.is_staff,
                        'is_superuser': user.is_superuser,
                        'is_registered_with_google': user.is_registered_with_google,
                        'desactivate_account': user.desactivate_account,
                    }
                }, status=status.HTTP_200_OK)

            except ValueError:
                # Si no se puede verificar el token de ID de Google, retornar error
                return Response({'error': 'Invalid ID token'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'error': 'ID token not provided'}, status=status.HTTP_400_BAD_REQUEST)


class DeleteUserView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        # Obtener el usuario a eliminar
        user = request.user

        # Eliminar el usuario y sus tokens
        user.delete()
        Token.objects.filter(user=user).delete()

        return Response({"mensaje": "Usuario eliminado exitosamente"}, status=204)
