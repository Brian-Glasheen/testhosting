from rest_framework.serializers import ModelSerializer
from .models import *

class InventorySerializer(ModelSerializer):
    class Meta:
        model = Inventory
        fields = (
            'ingredient_id',
            'ingredient_name',
            'price',
            'count',
            'restock_count',
            'minimum',
        )