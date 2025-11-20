from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from dashboard.models import Program, Course, Department, Staff, Album, Photo, Event, News, Enquiry, OnlineForm, SMTPSetting

# ------------------------ Dashboard ------------------------ #


@login_required
def dashboard(request):
    context = {
        'menu': 'dashboard',
    }
    return render(request, 'dashboard/dashboard.html', context)


# ------------------------ Programs ------------------------ #


@login_required
def programs(request):
    programs = Program.active_objects.all()

    context = {
        'menu': 'programs',
        'programs': programs,
    }

    return render(request, 'dashboard/programs/list.html', context)


@login_required
def create_program(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')

        try:
            Program.objects.create(name=name, description=description)
            messages.success(request, 'Program created successfully.')
        except Exception as e:
            messages.error(request, f'Error creating program: {e}')
            return redirect('create-program')
        
        return redirect('program-list')

    context = {
        'menu': 'programs',
    }

    return render(request, 'dashboard/programs/form.html', context)


@login_required
def edit_program(request, slug):
    program = Program.active_objects.filter(slug=slug).first()

    if not program:
        messages.error(request, 'Program not found.')
        return redirect('program-list')

    if request.method == 'POST':
        program.name = request.POST.get('name')
        program.description = request.POST.get('description')

        try:
            program.save()
            messages.success(request, 'Program updated successfully.')
        except Exception as e:
            messages.error(request, f'Error updating program: {e}')
            return redirect('edit-program', slug=slug)
        
        return redirect('program-list')

    context = {
        'menu': 'programs',
        'program': program,
    }

    return render(request, 'dashboard/programs/form.html', context)


@login_required
def delete_program(request, slug):
    program = Program.active_objects.filter(slug=slug).first()

    if not program:
        messages.error(request, 'Program not found.')
        return redirect('program-list')

    try:
        program.is_deleted = True
        program.save()
        messages.success(request, 'Program deleted successfully.')
    except Exception as e:
        messages.error(request, f'Error deleting program: {e}')

    return redirect('program-list')


# ------------------------ Courses ------------------------ #


@login_required
def courses(request):
    courses = Course.active_objects.all()

    context = {
        'menu': 'courses',
        'courses': courses,
    }

    return render(request, 'dashboard/courses/list.html', context)


@login_required
def create_course(request):
    programs = Program.active_objects.all()

    if request.method == 'POST':
        program_slug = request.POST.get('program')
        name = request.POST.get('name')
        description = request.POST.get('description')
        duration = request.POST.get('duration')
        eligibility = request.POST.get('eligibility')
        fees = request.POST.get('fees')

        program = Program.active_objects.filter(slug=program_slug).first()

        if not program:
            messages.error(request, 'Selected program not found.')
            return redirect('create-course')

        try:
            Course.objects.create(program=program, name=name, description=description, duration=duration, eligibility=eligibility, fees=fees)
            messages.success(request, 'Course created successfully.')
        except Exception as e:
            messages.error(request, f'Error creating course: {e}')
            return redirect('create-course')

        return redirect('course-list')

    context = {
        'menu': 'courses',
        'programs': programs,
    }

    return render(request, 'dashboard/courses/form.html', context)


@login_required
def edit_course(request, slug):
    course = Course.active_objects.filter(slug=slug).first()
    programs = Program.active_objects.all()

    if not course:
        messages.error(request, 'Course not found.')
        return redirect('course-list')

    if request.method == 'POST':
        program_slug = request.POST.get('program')
        course.name = request.POST.get('name')
        course.description = request.POST.get('description')
        course.duration = request.POST.get('duration')
        course.eligibility = request.POST.get('eligibility')
        course.fees = request.POST.get('fees')

        program = Program.active_objects.filter(slug=program_slug).first()

        if not program:
            messages.error(request, 'Selected program not found.')
            return redirect('edit-course')

        course.program = program

        try:
            course.save()
            messages.success(request, 'Course updated successfully.')
        except Exception as e:
            messages.error(request, f'Error updating course: {e}')
            return redirect('edit-course', slug=slug)

        return redirect('course-list')

    context = {
        'menu': 'courses',
        'course': course,
        'programs': programs,
    }

    return render(request, 'dashboard/courses/form.html', context)


@login_required
def delete_course(request, slug):
    course = Course.active_objects.filter(slug=slug).first()

    if not course:
        messages.error(request, 'Course not found.')
        return redirect('courses')

    try:
        course.is_deleted = True
        course.save()
        messages.success(request, 'Course deleted successfully.')
    except Exception as e:
        messages.error(request, f'Error deleting course: {e}')

    return redirect('courses')


# ------------------------ Departments ------------------------ #


@login_required
def departments(request):
    departments = Department.active_objects.all()

    context = {
        'menu': 'departments',
        'departments': departments,
    }

    return render(request, 'dashboard/departments/list.html', context)


@login_required
def create_department(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        description = request.POST.get('description')
        head = request.POST.get('head')

        try:
            Department.objects.create(name=name, description=description, head=head)
            messages.success(request, 'Department created successfully.')
        except Exception as e:
            messages.error(request, f'Error creating department: {e}')
            return redirect('create-department')

        return redirect('department-list')

    context = {
        'menu': 'departments',
    }

    return render(request, 'dashboard/departments/form.html', context)


@login_required
def edit_department(request, slug):
    department = Department.active_objects.filter(slug=slug).first()

    if not department:
        messages.error(request, 'Department not found.')
        return redirect('department-list')

    if request.method == 'POST':
        department.name = request.POST.get('name')
        department.description = request.POST.get('description')
        department.head = request.POST.get('head')

        try:
            department.save()
            messages.success(request, 'Department updated successfully.')
        except Exception as e:
            messages.error(request, f'Error updating department: {e}')
            return redirect('edit-department', slug=slug)
        
        return redirect('department-list')

    context = {
        'menu': 'departments',
        'department': department,
    }

    return render(request, 'dashboard/departments/form.html', context)


@login_required
def delete_department(request, slug):
    department = Department.active_objects.filter(slug=slug).first()

    if not department:
        messages.error(request, 'Department not found.')
        return redirect('department-list')

    try:
        department.is_deleted = True
        department.save()
        messages.success(request, 'Department deleted successfully.')
    except Exception as e:
        messages.error(request, f'Error deleting department: {e}')

    return redirect('department-list')


# ------------------------ Staff Members ------------------------ #


@login_required
def staffs(request):
    staffs = Staff.active_objects.all()

    context = {
        'menu': 'staffs',
        'staffs': staffs,
    }

    return render(request, 'dashboard/staffs/list.html', context)


@login_required
def create_staff(request):
    departments = Department.active_objects.all()

    if request.method == 'POST':
        department_slug = request.POST.get('department')
        name = request.POST.get('name')
        position = request.POST.get('position')
        photo = request.FILES.get('photo')

        department = Department.active_objects.filter(slug=department_slug).first()

        if not department:
            messages.error(request, 'Selected department not found.')
            return redirect('create-staff')

        try:
            Staff.objects.create(department=department, name=name, position=position, photo=photo)
            messages.success(request, 'Staff member created successfully.')
        except Exception as e:
            messages.error(request, f'Error creating staff member: {e}')
            return redirect('create-staff')

        return redirect('staff-list')

    context = {
        'menu': 'staffs',
        'departments': departments,
    }

    return render(request, 'dashboard/staffs/form.html', context)


@login_required
def edit_staff(request, slug):
    staff = Staff.active_objects.filter(slug=slug).first()
    departments = Department.active_objects.all()

    if not staff:
        messages.error(request, 'Staff member not found.')
        return redirect('staff-list')

    if request.method == 'POST':
        department_slug = request.POST.get('department')
        staff.name = request.POST.get('name')
        staff.position = request.POST.get('position')

        department = Department.active_objects.filter(slug=department_slug).first()

        if not department:
            messages.error(request, 'Selected department not found.')
            return redirect('edit-staff', slug=slug)

        staff.department = department

        photo = request.FILES.get('photo')
        if photo:
            staff.photo = photo

        try:
            staff.save()
            messages.success(request, 'Staff member updated successfully.')
        except Exception as e:
            messages.error(request, f'Error updating staff member: {e}')
            return redirect('edit-staff', slug=slug)

        return redirect('staff-list')
    
    context = {
        'menu': 'staffs',
        'staff': staff,
        'departments': departments,
    }

    return render(request, 'dashboard/staffs/form.html', context)


@login_required
def delete_staff(request, slug):
    staff = Staff.active_objects.filter(slug=slug).first()

    if not staff:
        messages.error(request, 'Staff member not found.')
        return redirect('staff-list')

    try:
        staff.is_deleted = True
        staff.save()
        messages.success(request, 'Staff member deleted successfully.')
    except Exception as e:
        messages.error(request, f'Error deleting staff member: {e}')

    return redirect('staff-list')


# ------------------------ Albums ------------------------ #


@login_required
def albums(request):
    albums = Album.active_objects.all()

    context = {
        'menu': 'albums',
        'albums': albums,
    }

    return render(request, 'dashboard/albums/list.html', context)


@login_required
def create_album(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        album_type = request.POST.get('type')
        cover_image = request.FILES.get('photo')

        try:
            Album.objects.create(title=title, cover_image=cover_image, type=album_type)
            messages.success(request, 'Album created successfully.')
        except Exception as e:
            messages.error(request, f'Error creating album: {e}')
            return redirect('create-album')

        return redirect('album-list')

    context = {
        'menu': 'albums',
    }

    return render(request, 'dashboard/albums/form.html', context)


@login_required
def edit_album(request, slug):
    album = Album.active_objects.filter(slug=slug).first()

    if not album:
        messages.error(request, 'Album not found.')
        return redirect('album-list')

    if request.method == 'POST':
        album.title = request.POST.get('title')
        album.type = request.POST.get('type')

        cover_image = request.FILES.get('photo')
        if cover_image:
            album.cover_image = cover_image

        try:
            album.save()
            messages.success(request, 'Album updated successfully.')
        except Exception as e:
            messages.error(request, f'Error updating album: {e}')
            return redirect('edit-album', slug=slug)
        
        return redirect('album-list')

    context = {
        'menu': 'albums',
        'album': album,
    }

    return render(request, 'dashboard/albums/form.html', context)


@login_required
def delete_album(request, slug):
    album = Album.active_objects.filter(slug=slug).first()

    if not album:
        messages.error(request, 'Album not found.')
        return redirect('album-list')

    try:
        album.is_deleted = True
        album.save()
        messages.success(request, 'Album deleted successfully.')
    except Exception as e:
        messages.error(request, f'Error deleting album: {e}')

    return redirect('album-list')


# ------------------------ Photos ------------------------ #


@login_required
def upload_photo(request, slug):
    album = Album.active_objects.filter(slug=slug).first()

    if not album:
        messages.error(request, 'Album not found.')
        return redirect('albums')

    if request.method == 'POST':
        image = request.FILES.get('image')
        file = request.FILES.get('file')

        try:
            Photo.objects.create(album=album, image=image, file=file)
            messages.success(request, 'Photo uploaded successfully.')
        except Exception as e:
            messages.error(request, f'Error uploading photo: {e}')
            return redirect('upload-photo', slug=slug)

        return redirect('album-list', slug=slug)

    context = {
        'menu': 'albums',
        'album': album,
    }

    return render(request, 'dashboard/albums/upload.html', context)


@login_required
def delete_photo(request, photo_id):
    photo = Photo.active_objects.filter(id=photo_id).first()

    if not photo:
        messages.error(request, 'Photo not found.')
        return redirect('albums')

    album_slug = photo.album.slug

    try:
        photo.delete()
        messages.success(request, 'Photo deleted successfully.')
    except Exception as e:
        messages.error(request, f'Error deleting photo: {e}')

    return redirect('photos', album_slug=album_slug)


# ------------------------ Events ------------------------ #

@login_required
def events(request):
    events = Event.active_objects.all()

    context = {
        'menu': 'events',
        'events': events,
    }

    return render(request, 'dashboard/events.html', context)


@login_required
def create_event(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        description = request.POST.get('description')
        date = request.POST.get('date')
        location = request.POST.get('location')

        try:
            Event.objects.create(title=title, description=description, date=date, location=location)
            messages.success(request, 'Event created successfully.')
        except Exception as e:
            messages.error(request, f'Error creating event: {e}')

        return redirect('create-event')

    context = {
        'menu': 'events',
    }

    return render(request, 'dashboard/create_event.html', context)


@login_required
def edit_event(request, slug):
    event = Event.active_objects.filter(slug=slug).first()

    if not event:
        messages.error(request, 'Event not found.')
        return redirect('events')

    if request.method == 'POST':
        event.title = request.POST.get('title')
        event.description = request.POST.get('description')
        event.date = request.POST.get('date')
        event.location = request.POST.get('location')

        try:
            event.save()
            messages.success(request, 'Event updated successfully.')
        except Exception as e:
            messages.error(request, f'Error updating event: {e}')

        return redirect('edit-event', slug=slug)

    context = {
        'menu': 'events',
        'event': event,
    }

    return render(request, 'dashboard/edit_event.html', context)


@login_required
def delete_event(request, slug):
    event = Event.active_objects.filter(slug=slug).first()

    if not event:
        messages.error(request, 'Event not found.')
        return redirect('events')

    try:
        event.delete()
        messages.success(request, 'Event deleted successfully.')
    except Exception as e:
        messages.error(request, f'Error deleting event: {e}')

    return redirect('events')


# ------------------------ News ------------------------ #


@login_required
def news_list(request):
    news_items = News.active_objects.all()

    context = {
        'menu': 'news',
        'news_items': news_items,
    }

    return render(request, 'dashboard/news.html', context)


@login_required
def create_news(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        news_type = request.POST.get('type')
        publish = request.POST.get('publish') == 'on'

        try:
            News.objects.create(title=title, content=content, type=news_type, publish=publish)
            messages.success(request, 'News item created successfully.')
        except Exception as e:
            messages.error(request, f'Error creating news item: {e}')

        return redirect('create-news')

    context = {
        'menu': 'news',
    }

    return render(request, 'dashboard/create_news.html', context)


@login_required
def edit_news(request, slug):
    news_item = News.active_objects.filter(slug=slug).first()

    if not news_item:
        messages.error(request, 'News item not found.')
        return redirect('news')

    if request.method == 'POST':
        news_item.title = request.POST.get('title')
        news_item.content = request.POST.get('content')
        news_item.type = request.POST.get('type')
        news_item.publish = request.POST.get('publish') == 'on'

        try:
            news_item.save()
            messages.success(request, 'News item updated successfully.')
        except Exception as e:
            messages.error(request, f'Error updating news item: {e}')

        return redirect('edit-news', slug=slug)

    context = {
        'menu': 'news',
        'news_item': news_item,
    }

    return render(request, 'dashboard/edit_news.html', context)


@login_required
def delete_news(request, slug):
    news_item = News.active_objects.filter(slug=slug).first()

    if not news_item:
        messages.error(request, 'News item not found.')
        return redirect('news')

    try:
        news_item.delete()
        messages.success(request, 'News item deleted successfully.')
    except Exception as e:
        messages.error(request, f'Error deleting news item: {e}')

    return redirect('news')


# ------------------------ Enquiries ------------------------ #

@login_required
def enquiries(request):
    enquiries = Enquiry.active_objects.all()

    context = {
        'menu': 'enquiries',
        'enquiries': enquiries,
    }

    return render(request, 'dashboard/enquiries.html', context)


@login_required
def view_enquiry(request, id):
    enquiry = Enquiry.active_objects.filter(id=id).first()

    if not enquiry:
        messages.error(request, 'Enquiry not found.')
        return redirect('enquiries')

    context = {
        'menu': 'enquiries',
        'enquiry': enquiry,
    }

    return render(request, 'dashboard/view_enquiry.html', context)


@login_required
def resolve_enquiry(request, id):
    enquiry = Enquiry.active_objects.filter(id=id).first()

    if not enquiry:
        messages.error(request, 'Enquiry not found.')
        return redirect('enquiries')

    enquiry.is_resolved = True

    try:
        enquiry.save()
        messages.success(request, 'Enquiry marked as resolved.')
    except Exception as e:
        messages.error(request, f'Error resolving enquiry: {e}')

    return redirect('view-enquiry', id=id)


# ------------------------ Online Forms ------------------------ #

@login_required
def online_forms(request):
    forms = OnlineForm.active_objects.all()

    context = {
        'menu': 'online_forms',
        'forms': forms,
    }

    return render(request, 'dashboard/online_forms.html', context)


@login_required
def view_online_form(request, id):
    form = OnlineForm.active_objects.filter(id=id).first()

    if not form:
        messages.error(request, 'Online form not found.')
        return redirect('online-forms')

    context = {
        'menu': 'online_forms',
        'form': form,
    }

    return render(request, 'dashboard/view_online_form.html', context)


@login_required
def delete_online_form(request, id):
    form = OnlineForm.active_objects.filter(id=id).first()

    if not form:
        messages.error(request, 'Online form not found.')
        return redirect('online-forms')

    try:
        form.delete()
        messages.success(request, 'Online form deleted successfully.')
    except Exception as e:
        messages.error(request, f'Error deleting online form: {e}')

    return redirect('online-forms')


# ------------------------ SMTP Config ------------------------ #

@login_required
def smtp_config(request):
    smtp_settings = SMTPSetting.active_objects.first()

    if request.method == 'POST':
        host = request.POST.get('host')
        port = request.POST.get('port')
        username = request.POST.get('username')
        password = request.POST.get('password')
        use_tls = request.POST.get('use_tls') == 'on'

        if smtp_settings:
            smtp_settings.host = host
            smtp_settings.port = port
            smtp_settings.username = username
            smtp_settings.password = password
            smtp_settings.use_tls = use_tls
        else:
            smtp_settings = SMTPSetting(
                host=host,
                port=port,
                username=username,
                password=password,
                use_tls=use_tls
            )

        try:
            smtp_settings.save()
            messages.success(request, 'SMTP settings updated successfully.')
        except Exception as e:
            messages.error(request, f'Error updating SMTP settings: {e}')

        return redirect('smtp-config')

    context = {
        'menu': 'smtp_config',
    }

    return render(request, 'dashboard/smtp_config.html', context)