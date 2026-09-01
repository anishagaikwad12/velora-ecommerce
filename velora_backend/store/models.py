from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=10)
    image = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} (Stock: {self.stock})"

class Wishlist(models.Model):
    user = models.CharField(max_length=100)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

class Order(models.Model):
    STATUS_CHOICES = [
        ('Placed', 'Placed'),
        ('Packed', 'Packed'),
        ('Out for Delivery', 'Out for Delivery'),
        ('Delivered', 'Delivered'),
        ('Replacement Requested', 'Replacement Requested'),
        ('Replaced', 'Replaced'),
        ('Cancellation Requested', 'Cancellation Requested'),
        ('Cancelled', 'Cancelled'),
        ('Refund Processing', 'Refund Processing'),
        ('Refunded', 'Refunded'),
    ]

    order_id = models.CharField(max_length=50, unique=True)
    customer_name = models.CharField(max_length=100)
    address = models.TextField()
    payment_method = models.CharField(max_length=50)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    discount_applied = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default="Placed")
    
    rating = models.IntegerField(null=True, blank=True)
    feedback = models.TextField(null=True, blank=True)
    action_reason = models.TextField(null=True, blank=True)
    refund_status = models.CharField(max_length=50, default="N/A")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.order_id} - {self.customer_name} ({self.status})"