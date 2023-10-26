from django.urls import path
from inventory import views

urlpatterns = [
    path('inventory/', views.Inventory, name="inventory"),
]