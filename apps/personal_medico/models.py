from django.db import models

# Create your models here.


class PersonalMedico(models.Model):
    id_personal = models.AutoField(primary_key=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    turno = models.CharField(max_length=50)
    dni = models.CharField(max_length=20)
    salida_cantidad = models.IntegerField()
