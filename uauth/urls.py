from django.urls import path
from uauth import views

urlpatterns = [
    path('', views.signin, name='login'),
    path('logout/', views.signout, name='logout'),
    path('change-password/', views.change_password, name='change-password'),
]