from rest_framework import serializers

from apps.paciente.models import Paciente


class PacienteSerializer(serializers.ModelSerializer):
    class meta:
        model = Paciente
        fields = '__all__'
