from django.contrib import admin
from .models import Menu

class api_admin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'category')

# Register your models here.

admin.site.register(Menu, api_admin)