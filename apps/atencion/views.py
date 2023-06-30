
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Atencion, Atencion
from .serializers import AtencionSerializer
from core.utils import CustomPageNumberPagination


class AtencionView(generics.ListAPIView):
    queryset = Atencion.objects.all()
    serializer_class = AtencionSerializer
    pagination_class = CustomPageNumberPagination


class AgregarAtencionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = AtencionSerializer(data=request.data)
        try:
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ActualizarAtencionView(APIView):
    permission_classes = [AllowAny]

    def put(self, request, atencion_id):
        try:
            atencion = Atencion.objects.get(pk=atencion_id)
            serializer = AtencionSerializer(
                atencion, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Atencion.DoesNotExist:
            return Response("La Atencion no existe.", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ActivarAtencionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, atencion_id):
        try:
            atencion = Atencion.objects.get(pk=atencion_id)
            atencion.activate = True
            atencion.save()
            return Response("El Atencion activado.", status=status.HTTP_200_OK)
        except Atencion.DoesNotExist:
            return Response("LA Atencion no existe.", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class DesactivarAtencionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, atencion_id):
        try:
            atencion = Atencion.objects.get(pk=atencion_id)
            atencion.activate = False
            atencion.save()
            return Response("La Atencion desactivado.", status=status.HTTP_200_OK)
        except Atencion.DoesNotExist:
            return Response("La Atencion no existe.", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
