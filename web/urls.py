from django.urls import path
from web import views

urlpatterns = [
    path('old-index/', views.index, name='old-index'),
    path('', views.home, name='home'),
    path('about-us/', views.about, name='about-us'),
    path('rules-and-regulations/', views.rules, name='rules'),
    path('placements/', views.placements, name='placements'),
    path('courses/<slug:slug>/', views.courses, name='courses'),
    path('photo-gallery/', views.photo_gallery, name='photo-gallery'),
    path('video-gallery/', views.video_gallery, name='video-gallery'),
    path('view-gallery/<slug:slug>/', views.gallery_details, name='gallery-details'),
    path('department/<slug:slug>/', views.department, name='department-details'),
    path('events/', views.events, name='events'),
    path('apply-online/', views.apply_online, name='apply-online'),
    path('contact-us/', views.contact, name='contact-us'),
]