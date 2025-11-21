from django.shortcuts import render, redirect
from django.contrib import messages
from dashboard.models import Program, Course, Album, Photo, Department, Staff, Event, Enquiry

# Create your views here.

def index(request):
    return render(request, 'web/old-index.html')


def home(request):
    return render(request, 'web/index.html')

def about(request):
    return render(request, 'web/about-us.html')

def rules(request):
    return render(request, 'web/rules.html')

def placements(request):
    return render(request, 'web/placements.html')

def courses(request, slug):
    program = Program.active_objects.filter(slug=slug).first()
    courses = Course.active_objects.filter(program=program)

    context = {
        'courses' : courses
    }

    return render(request, 'web/courses.html', context)

def photo_gallery(request):
    albums = Album.active_objects.filter(type='photo')

    context = {
        'albums' : albums
    }

    return render(request, 'web/photo-gallery.html', context)

def video_gallery(request):
    albums = Album.active_objects.filter(type='video')

    context = {
        'albums' : albums
    }
    return render(request, 'web/video-gallery.html', context)

def gallery_details(request,slug):
    album = Album.active_objects.filter(slug=slug).first()
    files = Photo.active_objects.filter(album=album)

    context = {
        'album' : album,
        'files' : files
    }
    return render(request, 'web/gallery-details.html', context)

def department(request, slug):
    department = Department.active_objects.filter(slug=slug).first()
    faculties = Staff.active_objects.filter(department=department)

    context = {
        'department' : department,
        'faculties' : faculties
    }
    return render(request, 'web/department.html', context)

def events(request):
    events = Event.active_objects.all()

    context = {
        'events' : events,
    }
    return render(request, 'web/events.html', context)

def apply_online(request):
    return render(request, 'web/apply-online.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        mobile = request.POST.get('mobile')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        Enquiry.objects.create(name=name, mobile=mobile, email=email, subject=subject, message=message)
        messages.success(request, 'Enquiry Submited ... !')
        return redirect('contact-us')

    return render(request, 'web/contact-us.html')