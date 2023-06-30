from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('apps.medico.urls')),
    path('api/', include('apps.paciente.urls')),
    path('api/', include('apps.personal_medico.urls')),
    path('api/', include('apps.diagnostico.urls')),
    path('api/', include('apps.informante_atencion.urls')),

]
