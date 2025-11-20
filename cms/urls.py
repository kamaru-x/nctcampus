from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

handler400 = 'core.views.handler400'
handler403 = 'core.views.handler403'
handler404 = 'core.views.handler404'
handler500 = 'core.views.handler500'
handler503 = 'core.views.handler503'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('web.urls')),
    path('dashboard/', include('dashboard.urls')),
    path('cms-login/', include('uauth.urls')),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)