from django.contrib import admin
from django.urls import path, include
from django.conf import settings  
from django.conf.urls.static import static 
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Apps.store.urls')),
    
    path(
        "favicon.ico",
        RedirectView.as_view(
            url=staticfiles_storage.url("favicon.ico"),
            permanent=False,
        ),
        name="favicon",
    ),
]

if settings.DEBUG:  
        urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT) 