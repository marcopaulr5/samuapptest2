from django.shortcuts import render

# Create your views here.

from rest_framework import generics, status
from apps.medico.models import Medico
from apps.medico.serializers import MedicoSerializer

from core.utils import CustomPageNumberPagination


class MedicoView(generics.ListAPIView):

    queryset = Medico.objects.all()
    serializer_class = MedicoSerializer
    pagination_class = CustomPageNumberPagination
