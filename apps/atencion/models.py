from django.db import models
from apps import informante_atencion
from apps.diagnostico.models import Diagnostico
from apps.informante_atencion.models import InformanteAtencion
from apps.medico.models import Medico
from apps.paciente.models import Paciente

from apps.personal_medico.models import PersonalMedico
from apps.ubicacion_atencion.models import UbicacionAtencion


# Create your models here.


class Atencion(models.Model):
    id_atencion = models.AutoField(primary_key=True)
    tipo_emergencia = models.CharField(max_length=50, null=True, blank=True)
    tipo_atencion = models.CharField(max_length=50, null=True, blank=True)
    traslado = models.BooleanField(default=False)

    id_personal = models.ForeignKey(PersonalMedico, on_delete=models.CASCADE)
    id_medico = models.ForeignKey(Medico, on_delete=models.CASCADE)
    id_diagnostico = models.ForeignKey(Diagnostico, on_delete=models.CASCADE)
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    id_ubicacion_atencion = models.ForeignKey(
        UbicacionAtencion, on_delete=models.CASCADE)
    id_informante_atencion = models.ForeignKey(
        InformanteAtencion, on_delete=models.CASCADE)
