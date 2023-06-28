from django.db import models

# Create your models here.


class Medico(models.Model):
    id_medico = models.AutoField(primary_key=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    n_colegiatura = models.CharField(max_length=50)
    dni = models.CharField(max_length=20)
    telefono = models.CharField(max_length=20)
