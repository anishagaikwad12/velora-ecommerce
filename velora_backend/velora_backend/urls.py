from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from rest_framework.routers import DefaultRouter
from store.views import ProductViewSet, WishlistViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'wishlist', WishlistViewSet)

urlpatterns = [
    path('', lambda request: redirect('api/products/', permanent=False)), # Redirects root URL
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]