from django.urls import path, re_path, include


from .views import (
     personal_medico_view, PacienteViewSet,DiagnosticoViewSet,InformanteLlamadaViewSet,MedicoEmergenciaViewSet
)

urls_samu_modulo = [
     path("personal_medico_get/", personal_medico_view.as_view(),
         name="personal_medico_get/"),
     path("paciente/", PacienteViewSet.as_view({'get': 'list', 'post': 'create'}),
           name='pacientes/'),
     path("diagnostico/", DiagnosticoViewSet.as_view({'get': 'list', 'post': 'create'}),
           name='diagnostico/'),
     path("info_llamadas/", InformanteLlamadaViewSet.as_view({'get': 'list', 'post': 'create'}),
           name='info_llamadas/'),
     path("medicos/",MedicoEmergenciaViewSet.as_view({'get': 'list', 'post': 'create'}),
           name='medicos/'),
   
]

urlpatterns= urls_samu_modulo