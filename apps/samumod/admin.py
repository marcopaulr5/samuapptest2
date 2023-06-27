from django.contrib import admin

# Register your models here.
from .models import Paciente, MedicoEmergencia, PersonalMedico, Diagnostico, Atencion, UbicacionAtencion, InformanteLlamada


admin.site.register(Paciente)
admin.site.register(MedicoEmergencia)
admin.site.register(PersonalMedico)
admin.site.register(Diagnostico)
admin.site.register(Atencion)
admin.site.register(UbicacionAtencion)
admin.site.register(InformanteLlamada)
