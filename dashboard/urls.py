from django.urls import path
from dashboard import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),

    #------------ Program URLs ------------ #
    path('programs/', views.programs, name='program-list'),
    path('programs/create/', views.create_program, name='create-program'),
    path('programs/<slug:slug>/edit/', views.edit_program, name='edit-program'),
    path('programs/<slug:slug>/delete/', views.delete_program, name='delete-program'),


    #------------ Course URLs ------------ #
    path('courses/', views.courses, name='course-list'),
    path('courses/create/', views.create_course, name='create-course'),
    path('courses/<slug:slug>/edit/', views.edit_course, name='edit-course'),
    path('courses/<slug:slug>/delete/', views.delete_course, name='delete-course'),


    #------------ Departments URLs ------------ #
    path('departments/', views.departments, name='department-list'),
    path('departments/create/', views.create_department, name='create-department'),
    path('departments/<slug:slug>/edit/', views.edit_department, name='edit-department'),
    path('departments/<slug:slug>/delete/', views.delete_department, name='delete-department'),


    #------------ Staff URLs ------------ #
    path('staff/', views.staffs, name='staff-list'),
    path('staff/create/', views.create_staff, name='create-staff'),
    path('staff/<slug:slug>/edit/', views.edit_staff, name='edit-staff'),
    path('staff/<slug:slug>/delete/', views.delete_staff, name='delete-staff'),


    #------------ Albums URLs ------------ #
    path('albums/', views.albums, name='album-list'),
    path('albums/create/', views.create_album, name='create-album'),
    path('albums/<slug:slug>/edit/', views.edit_album, name='edit-album'),
    path('albums/<slug:slug>/delete/', views.delete_album, name='delete-album'),


    #------------ Phhoto URLs ------------ #
    path('photos/upload/<slug:slug>/', views.upload_photo, name='upload-photo'),
    path('photos/<slug:slug>/delete/', views.delete_photo, name='delete-photo'),


    #------------ Events URLs ------------ #
    path('events/', views.events, name='event-list'),
    path('events/create/', views.create_event, name='create-event'),
    path('events/<slug:slug>/edit/', views.edit_event, name='edit-event'),
    path('events/<slug:slug>/delete/', views.delete_event, name='delete-event'),


    #------------ News URLs ------------ #
    path('news/', views.news_list, name='news-list'),
    path('news/create/', views.create_news, name='create-news'),
    path('news/<slug:slug>/edit/', views.edit_news, name='edit-news'),
    path('news/<slug:slug>/delete/', views.delete_news, name='delete-news'),


    #------------ Enquiry URLs ------------ #
    path('enquiries/', views.enquiries, name='enquiry-list'),
    path('enquiries/<int:id>/view/', views.view_enquiry, name='view-enquiry'),
    path('enquiries/<int:id>/resolve/', views.resolve_enquiry, name='resolve-enquiry'),


    #------------ Online Forms ------------ #
    path('online-forms/', views.online_forms, name='online-form-list'),
    path('online-forms/<int:id>/view/', views.view_online_form, name='view-online-form'),
    path('online-forms/<int:id>/delete/', views.delete_online_form, name='delete-online-form'),
]