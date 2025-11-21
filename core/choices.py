from django.db import models
from django.utils.translation import gettext_lazy as _

class AlbumTypeChoices(models.TextChoices):
    VIDEO = 'videos',_('Video')
    PHOTO = 'photos',_('Photo')


class NewsTypeChoices(models.TextChoices):
    GENERAL = 'general', _('General')
    COLLAGE_ANNOUNCEMENTS = 'collage_announcements', _('College Announcements')
    ADMISSION_NOTICE = 'admission_notice', _('Admission Notice')
    ACADAMIC_UPDATE = 'academic_update', _('Academic Update')