from django.contrib import admin
from .models import Product, Wishlist, Order

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price')

@admin.register(Wishlist)
class WishlistAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'product')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('order_id', 'customer_name', 'total_amount', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('order_id', 'customer_name')