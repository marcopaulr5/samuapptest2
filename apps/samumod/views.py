from django.shortcuts import render
from .serializers import PersonalMedicoSerializer,PacienteSerializer,MedicoEmergenciaSerializer,AtencionSerializer,DiagnosticoSerializer,UbicacionAtencionSerializer,InformanteLlamadaSerializer
from rest_framework import generics
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes
from rest_framework.authentication import SessionAuthentication

# Aquí puedes utilizar las clases importadas desde models

# Create your views here.
from .models import  PersonalMedico,Paciente,MedicoEmergencia,Atencion,UbicacionAtencion,Diagnostico,InformanteLlamada

class personal_medico_view(generics.ListAPIView):
    queryset = PersonalMedico.objects.all()
    serializer_class = PersonalMedicoSerializer

class PacienteViewSet(viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer

@authentication_classes([])
class MedicoEmergenciaViewSet(viewsets.ModelViewSet):
    queryset = MedicoEmergencia.objects.all()
    serializer_class = MedicoEmergenciaSerializer

class PersonalMedicoViewSet(viewsets.ModelViewSet):
    queryset = PersonalMedico.objects.all()
    serializer_class = PersonalMedicoSerializer

class AtencionViewSet(viewsets.ModelViewSet):
    queryset = Atencion.objects.all()
    serializer_class = AtencionSerializer

class DiagnosticoViewSet(viewsets.ModelViewSet):
    queryset = Diagnostico.objects.all()
    serializer_class = DiagnosticoSerializer

class InformanteLlamadaViewSet(viewsets.ModelViewSet):
    queryset = InformanteLlamada.objects.all()
    serializer_class = InformanteLlamadaSerializer

class UbicacionAtencionViewSet(viewsets.ModelViewSet):
    queryset = UbicacionAtencion.objects.all()
    serializer_class = UbicacionAtencionSerializer
