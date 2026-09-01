from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, WishlistViewSet, manage_orders

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'wishlist', WishlistViewSet)

from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, Wishlist, Order
from .serializers import ProductSerializer, WishlistSerializer, OrderSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class WishlistViewSet(viewsets.ModelViewSet):
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializer

@api_view(['GET', 'POST', 'PATCH'])
def manage_orders(request, order_id=None):
    if request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            order = serializer.save()
            
            # Inventory Management: Deduct Stock
            items = request.data.get('items', [])
            for item in items:
                try:
                    product = Product.objects.get(id=item.get('id'))
                    product.stock = max(0, product.stock - item.get('quantity', 1))
                    product.save()
                except Product.DoesNotExist:
                    pass

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'GET':
        orders = Order.objects.all().order_by('-created_at')
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    elif request.method == 'PATCH':
        try:
            order = Order.objects.get(order_id=order_id)
        except Order.DoesNotExist:
            return Response({'error': 'Order not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = OrderSerializer(order, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)