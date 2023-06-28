from django.db import models

from apps.paciente.models import Paciente

# Create your models here.


class UbicacionAtencion(models.Model):
    id_ubicacionatencion = models.AutoField(primary_key=True)
    direccion = models.CharField(max_length=100)
    referencia = models.CharField(max_length=100)
    sector = models.CharField(max_length=50)
    sub_sector = models.CharField(max_length=50)
    distrito = models.CharField(max_length=50)
    provincia = models.CharField(max_length=50)
    region = models.CharField(max_length=50)
    hora_salida_ambulancia = models.DateTimeField()
    hora_llegada = models.DateTimeField()
    hora_salida = models.DateTimeField()
    hora_llegada_EESS = models.DateTimeField()
