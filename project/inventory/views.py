from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

class InventoryView(APIView):
    def get(self, request):
        data = [
            {
                "ingredient_id": output.ingredient_id,
                "ingredient_name": output.ingredient_name,
                "price": output.price,
                "count": output.count,
                "restock_count": output.restock_count,
                "minimum": output.minimum,
            }
            for output in Inventory.objects.all().order_by('ingredient_id')
        ]

        return Response(data)
    

    def post(self, request):
        serializer = InventorySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

