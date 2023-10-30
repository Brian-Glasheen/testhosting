from django.urls import path
from menu import views

urlpatterns = [
    path('', views.Menu, name="menu"),
]