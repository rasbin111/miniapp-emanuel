from django.contrib import admin

from .models import Content, ContentType, Terms, Product


admin.site.register([Content, ContentType, Terms, Product])
