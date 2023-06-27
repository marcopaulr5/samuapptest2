from django.db import models

# Create your models here.
class Paciente(models.Model):
    paciente_id = models.AutoField(primary_key=True)
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    genero = models.CharField(max_length=20)
    dni = models.CharField(max_length=15)
    tipo_seguro = models.CharField(max_length=50, blank=True, null=True)
    edad = models.IntegerField()
    tipo_edad = models.CharField(max_length=20, blank=True, null=True)
    prioridad_emergencia = models.CharField(max_length=20, blank=True, null=True)
    accidente = models.CharField(max_length=20, blank=True, null=True)
    condicion_antes = models.TextField(blank=True, null=True)
    condicion_despues = models.TextField(blank=True, null=True)
    tipo_edad = models.CharField(max_length=20, blank=True, null=True)
    telefono_paciente = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.nombres



class MedicoEmergencia(models.Model):
    id_medico = models.AutoField(primary_key=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    n_colegiatura = models.CharField(max_length=50)
    dni = models.CharField(max_length=20)
    telefono = models.CharField(max_length=20)

class PersonalMedico(models.Model):
    id_personal = models.AutoField(primary_key=True)
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    turno = models.CharField(max_length=50)
    dni = models.CharField(max_length=20)
    salida_cantidad = models.IntegerField()

    def __str__(self):
        return self.nombres


class Atencion(models.Model):
    id_atencion = models.AutoField(primary_key=True)
    tipo_emergencia = models.CharField(max_length=50)
    tipo_atencion = models.CharField(max_length=50)
    traslado = models.BooleanField(default=False)
    id_personal = models.ForeignKey(PersonalMedico, on_delete=models.CASCADE)
    id_medico = models.ForeignKey(MedicoEmergencia, on_delete=models.CASCADE)
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)

class Diagnostico(models.Model):
    id_diagnostico = models.AutoField(primary_key=True)
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    condicion_antes = models.CharField(max_length=200)
    observaciones = models.CharField(max_length=200)
    condicion_despues = models.CharField(max_length=200)
    id_atencion = models.ForeignKey(Atencion, on_delete=models.CASCADE)
    derivado_EESS = models.CharField(max_length=100)
    derivado_medico = models.CharField(max_length=100)

class InformanteLlamada(models.Model):
    id_llamada = models.AutoField(primary_key=True)
    tipo_llamada = models.CharField(max_length=50)
    fecha = models.DateField()
    hora = models.TimeField()
    id_personal = models.ForeignKey(PersonalMedico, on_delete=models.CASCADE)
    turno = models.CharField(max_length=50)
    telefono_infor = models.CharField(max_length=20)
    nombres_infor = models.CharField(max_length=50)
    apellidos_infor = models.CharField(max_length=50)
    dni_infor = models.CharField(max_length=20)
    gen_infor = models.CharField(max_length=20, blank=True, null=True)


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
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)