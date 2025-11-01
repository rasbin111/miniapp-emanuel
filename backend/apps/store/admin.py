from django.contrib import admin

from .models import Content, ContentType, Terms


admin.site.register([Content, ContentType, Terms])
