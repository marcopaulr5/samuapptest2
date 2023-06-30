
from django.urls import path

from apps.user.views import DeleteUserView, GoogleLoginView
urlpatterns = [
    path('google/logincreate/', GoogleLoginView.as_view(), name='login_google'),
    path('delete_user/', DeleteUserView.as_view(), name='delete_user'),
]
