from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('dress', 'Dresses'),
        ('top', 'Tops'),
        ('bag', 'Bags'),
        ('shoes', 'Shoes'),
        ('beauty', 'Beauty'),
    ]

    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=100, default="VELORA EXCLUSIVE", blank=True, null=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.URLField(max_length=500)
    rating = models.FloatField(default=4.5, blank=True, null=True)
    reviews_count = models.IntegerField(default=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    material = models.CharField(max_length=255, blank=True, null=True)
    
    # Store lists like ["S", "M", "L"] or ["Red", "Blue"] as JSON data
    sizes = models.JSONField(default=list, blank=True, help_text="e.g. ['S', 'M', 'L', 'XL']")
    colors = models.JSONField(default=list, blank=True, help_text="e.g. ['Multicolor', 'Yellow']")
    
    in_stock = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Wishlist item: {self.product.name}"