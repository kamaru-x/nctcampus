from django.db import models
from core.models import BaseModel
from core.models import save_data
from django.utils.translation import gettext_lazy as _
from core.middlewares import RequestMiddleware
from core.choices import AlbumTypeChoices, NewsTypeChoices

# ------------ Program Model ------------ #

class Program(BaseModel):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('Program')
        verbose_name_plural = _('Programs')
        ordering = ("name",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.name)

        super(Program, self).save(*args, **kwargs)

# ------------ Course Model ------------ #

class Course(BaseModel):
    program = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='courses')
    name = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.CharField(max_length=50)
    eligibility = models.TextField(null=True, blank=True)
    fees = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('Course')
        verbose_name_plural = _('Courses')
        ordering = ("name",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.name)

        super(Course, self).save(*args, **kwargs)

# ------------ Album Model ------------ #

class Album(BaseModel):
    type = models.CharField(max_length=50, choices=AlbumTypeChoices.choices, default=AlbumTypeChoices.PHOTO)
    title = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='albums/covers/', null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Album')
        verbose_name_plural = _('Albums')
        ordering = ("title",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.title)

        super(Album, self).save(*args, **kwargs)

# ------------ Photo Model ------------ #

class Photo(BaseModel):
    album = models.ForeignKey(Album, on_delete=models.CASCADE, related_name='photos')
    image = models.ImageField(upload_to='albums/photos/', null=True, blank=True)
    file = models.FileField(upload_to='albums/files/', null=True, blank=True)

    def __str__(self):
        return f'Photo in {self.album.title}'

    class Meta:
        verbose_name = _('Photo')
        verbose_name_plural = _('Photos')
        ordering = ("-date_added",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.album.title)

        super(Photo, self).save(*args, **kwargs)

# ------------ Department Model ------------ #

class Department(BaseModel):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    head = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('Department')
        verbose_name_plural = _('Departments')
        ordering = ("name",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.name)

        super(Department, self).save(*args, **kwargs)

# ------------ Staff Model ------------ #

class Staff(BaseModel):
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='staff_members')
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='staff/photos/', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('Staff')
        verbose_name_plural = _('Staff Members')
        ordering = ("name",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.name)

        super(Staff, self).save(*args, **kwargs)

# ------------ Event Model ------------ #

class Event(BaseModel):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='events/images/', null=True, blank=True)
    description = models.TextField()
    event_date = models.DateField()
    start_time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    venue = models.CharField(max_length=200)
    organizer = models.CharField(max_length=100, null=True, blank=True)
    cta = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Event')
        verbose_name_plural = _('Events')
        ordering = ("-event_date",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.title)

        super(Event, self).save(*args, **kwargs)

# ------------ News Model ------------ #

class News(BaseModel):
    type = models.CharField(max_length=50, choices=NewsTypeChoices.choices, default=NewsTypeChoices.GENERAL)
    title = models.CharField(max_length=200)
    content = models.TextField()
    cta = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('News')
        verbose_name_plural = _('News Articles')
        ordering = ("-date_added",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.title)

        super(News, self).save(*args, **kwargs)

# ------------ Enquiries Model ------------ #

class Enquiry(BaseModel):
    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=15)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    is_resolved = models.BooleanField(default=False)

    def __str__(self):
        return f'Enquiry from {self.name} - {self.subject}'

    class Meta:
        verbose_name = _('Enquiry')
        verbose_name_plural = _('Enquiries')
        ordering = ("-date_added",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.name)

        super(Enquiry, self).save(*args, **kwargs)

# ------------ Online Form Model ------------ #

class OnlineForm(BaseModel):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'Online Form from {self.name} for {self.course.name}'

    class Meta:
        verbose_name = _('Online Form')
        verbose_name_plural = _('Online Forms')
        ordering = ("-date_added",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.name)


# ------------ SMTP Model ------------ #

class SMTPSetting(BaseModel):
    host = models.CharField(max_length=200)
    port = models.IntegerField()
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    use_tls = models.BooleanField(default=True)

    def __str__(self):
        return f'SMTP Setting for {self.host}'

    class Meta:
        verbose_name = _('SMTP Setting')
        verbose_name_plural = _('SMTP Settings')
        ordering = ("-date_added",)

    def save(self, request=None, *args, **kwargs):
        request = RequestMiddleware(get_response=None)
        request = request.thread_local.current_request
        save_data(self, request, self.host)

        super(SMTPSetting, self).save(*args, **kwargs)