from rest_framework import serializers
from .models import PersonalMedico,Paciente,MedicoEmergencia,Atencion,InformanteLlamada,UbicacionAtencion,Diagnostico

class PersonalMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalMedico
        fields = '__all__'

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = '__all__'

class MedicoEmergenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicoEmergencia
        fields = '__all__'

class AtencionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atencion
        fields = '__all__'

class DiagnosticoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostico
        fields = '__all__'

class InformanteLlamadaSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformanteLlamada
        fields = '__all__'

class UbicacionAtencionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UbicacionAtencion
        fields = '__all__'
