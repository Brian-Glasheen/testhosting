# from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Menu

def menu(request):
    menu_items = Menu.objects.all().values()
    template = loader.get_template('index.html')
    context = {
        'menu' : menu_items,
    }

    return HttpResponse(template.render(context, request))