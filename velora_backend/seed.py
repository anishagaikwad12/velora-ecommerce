import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'velora_backend.settings')
django.setup()

from store.models import Product

products_data = [
    { 
        "name": "Floral Summer Dress", "price": 1499, "category": "dress", 
        "image": "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg", 
        "rating": 4.5, "reviews_count": 128, "sizes": ["S", "M", "L", "XL"], "colors": ["Multicolor", "Yellow"],
        "description": "Crafted from 100% breathable organic cotton, this lightweight floral maxi dress features an adjustable A-line waistline, subtle ruffle details, and side slit pockets." 
    },
    { 
        "name": "Elegant Pink Evening Dress", "price": 2299, "category": "dress", 
        "image": "https://images.unsplash.com/photo-1519741497674-611481863552?w=400", 
        "rating": 4.8, "reviews_count": 94, "sizes": ["XS", "S", "M", "L"], "colors": ["Blush Pink", "Rose"],
        "description": "A tailored cocktail gown built with a structured bodice and soft satin lining. Features subtle shimmer weaving and a hidden back zipper." 
    },
    { 
        "name": "Casual Maxi Dress", "price": 1899, "category": "dress", 
        "image": "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg", 
        "rating": 4.3, "reviews_count": 67, "sizes": ["S", "M", "L", "XXL"], "colors": ["Olive Green", "Navy Blue"],
        "description": "Designed for effortless daily styling, this full-length rayon maxi dress offers stretchable elastic smocking at the waist and tier layering." 
    },
    { 
        "name": "White Casual Linen Top", "price": 799, "category": "top", 
        "image": "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg", 
        "rating": 4.6, "reviews_count": 215, "sizes": ["S", "M", "L"], "colors": ["White", "Off-White"],
        "description": "A relaxed-fit linen blend top featuring a soft crew neck and rolled short sleeves. Highly breathable for warm weather." 
    },
    { 
        "name": "Pastel Crop Hoodie", "price": 1299, "category": "top", 
        "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400", 
        "rating": 4.7, "reviews_count": 180, "sizes": ["XS", "S", "M"], "colors": ["Lavender", "Mint Green"],
        "description": "Ultra-soft cotton fleece crop hoodie with dropped shoulders, matching drawstring cords, and ribbed cuffs." 
    },
    { 
        "name": "Satin Wrap Blouse", "price": 1099, "category": "top", 
        "image": "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg", 
        "rating": 4.4, "reviews_count": 82, "sizes": ["S", "M", "L", "XL"], "colors": ["Emerald Green", "Champagne"],
        "description": "Luxurious satin wrap top featuring a deep V-neck cut, adjustable waist tie, and button-cuffed balloon sleeves." 
    },
    { 
        "name": "Luxury Leather Handbag", "price": 2999, "category": "bag", 
        "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400", 
        "rating": 4.9, "reviews_count": 310, "sizes": ["One Size"], "colors": ["Tan Brown", "Classic Black"],
        "description": "Handcrafted structured bag made from high-grade vegan leather. Features gold-toned metal hardware and double zip compartments." 
    },
    { 
        "name": "Minimalist Mini Sling Bag", "price": 1499, "category": "bag", 
        "image": "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg", 
        "rating": 4.2, "reviews_count": 74, "sizes": ["One Size"], "colors": ["Beige", "Pastel Pink"],
        "description": "Compact cross-body mini bag built with magnetic snap closure, card slots, and an adjustable chain strap." 
    },
    { 
        "name": "Classic White Sneakers", "price": 2199, "category": "shoes", 
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", 
        "rating": 4.8, "reviews_count": 420, "sizes": ["UK 4", "UK 5", "UK 6", "UK 7"], "colors": ["White/Gold", "Pure White"],
        "description": "Versatile low-top sneakers built with memory foam insoles, breathable perforations, and anti-slip rubber outsoles." 
    },
    { 
        "name": "Strappy Block Heels", "price": 2499, "category": "shoes", 
        "image": "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg", 
        "rating": 4.6, "reviews_count": 112, "sizes": ["UK 5", "UK 6", "UK 7"], "colors": ["Nude", "Black"],
        "description": "2.5-inch block heels with cushioned footbeds and cross-over ankle straps. Engineered for stability." 
    },
    { 
        "name": "Matte Lipstick Set (5 Pcs)", "price": 599, "category": "beauty", 
        "image": "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg", 
        "rating": 4.7, "reviews_count": 530, "sizes": ["5 Mini Sticks"], "colors": ["Nude & Berry Collection"],
        "description": "Long-wear, transfer-proof matte lipsticks enriched with Vitamin E and Jojoba oil for weightless hydration." 
    },
    { 
        "name": "Hydrating Facial Serum", "price": 899, "category": "beauty", 
        "image": "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg", 
        "rating": 4.9, "reviews_count": 245, "sizes": ["30 ml"], "colors": ["Clear Formula"],
        "description": "Formulated with 2% pure Hyaluronic Acid and Niacinamide. Plumps skin texture and locks in 24-hour hydration." 
    }
]

for item in products_data:
    Product.objects.get_or_create(name=item["name"], defaults=item)

print("Database populated successfully!")