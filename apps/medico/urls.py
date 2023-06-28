

from apps.medico.views import MedicoView
from django.urls import path


urlpatterns = [
    path('get-medicos', MedicoView.as_view(),
         name='get-medicos'),
]
