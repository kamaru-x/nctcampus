from django.urls import path
from web import views

urlpatterns = [
    path('', views.home, name='home'),
    path('old-index/', views.index, name='old-index')
]