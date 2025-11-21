from django.contrib import admin
from dashboard.models import Program, Course, Album, Photo, Department, Staff, Event, News, Enquiry, OnlineForm

# Register your models here.

class ProgramAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'is_deleted']


class CourseAdmin(admin.ModelAdmin):
    list_display = ['name', 'program', 'is_deleted']


class AlbumAdmin(admin.ModelAdmin):
    list_display = ['type', 'title', 'is_deleted']


class PhotoAdmin(admin.ModelAdmin):
    list_display = ['album', 'is_deleted']


class DepartmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'head', 'is_deleted']


class StaffAdmin(admin.ModelAdmin):
    list_display = ['name', 'position', 'is_deleted']


class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'event_date', 'venue', 'is_deleted']


class NewsAdmin(admin.ModelAdmin):
    list_display = ['type', 'title', 'is_deleted']


class EnquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'is_deleted']


class OnlineFormAdmin(admin.ModelAdmin):
    list_display = ['name', 'is_deleted']



admin.site.register(Program, ProgramAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Album, AlbumAdmin)
admin.site.register(Photo, PhotoAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(Staff, StaffAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(Enquiry, EnquiryAdmin)
admin.site.register(OnlineForm, OnlineFormAdmin)