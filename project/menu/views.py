from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

class MenuView(APIView):
    def get(self, request):
        data = [
            {
                "id": output.id,
                "name": output.name,
                "price": output.price,
                "category": output.category,
            }
            for output in Menu.objects.all().order_by('id')
        ]
        
        return Response(data)
    

    def post(self, request):
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)