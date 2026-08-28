const products = [
    // Dresses
    { 
        id: 1, 
        name: "Floral Summer Dress", 
        price: 1499, 
        category: "dress", 
        image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg", 
        rating: 4.5, 
        reviews: 128, 
        inStock: true,
        sizes: ["S", "M", "L", "XL"], 
        colors: ["Multicolor", "Yellow"],
        description: "Crafted from 100% breathable organic cotton, this lightweight floral maxi dress features an adjustable A-line waistline, subtle ruffle details, and side slit pockets. Perfect for sunny outings and beach getaways." 
    },
    { 
        id: 2, 
        name: "Elegant Pink Evening Dress", 
        price: 2299, 
        category: "dress", 
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400", 
        rating: 4.8, 
        reviews: 94, 
        inStock: true,
        sizes: ["XS", "S", "M", "L"], 
        colors: ["Blush Pink", "Rose"],
        description: "A tailored cocktail gown built with a structured bodice and soft satin lining. Features subtle shimmer weaving, a hidden back zipper, and a flattering sweetheart neckline ideal for evening galas." 
    },
    { 
        id: 3, 
        name: "Casual Maxi Dress", 
        price: 1899, 
        category: "dress", 
        image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg", 
        rating: 4.3, 
        reviews: 67, 
        inStock: true,
        sizes: ["S", "M", "L", "XXL"], 
        colors: ["Olive Green", "Navy Blue"],
        description: "Designed for effortless daily styling, this full-length rayon maxi dress offers stretchable elastic smocking at the waist, tier layering, and wrinkle-resistant fabric." 
    },

    // Tops
    { 
        id: 4, 
        name: "White Casual Linen Top", 
        price: 799, 
        category: "top", 
        image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg", 
        rating: 4.6, 
        reviews: 215, 
        inStock: true,
        sizes: ["S", "M", "L"], 
        colors: ["White", "Off-White"],
        description: "A relaxed-fit linen blend top featuring a soft crew neck and rolled short sleeves. Highly breathable for warm weather and easily paired with high-waisted denim." 
    },
    { 
        id: 5, 
        name: "Pastel Crop Hoodie", 
        price: 1299, 
        category: "top", 
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400", 
        rating: 4.7, 
        reviews: 180, 
        inStock: true,
        sizes: ["XS", "S", "M"], 
        colors: ["Lavender", "Mint Green"],
        description: "Ultra-soft cotton fleece crop hoodie with dropped shoulders, matching drawstring cords, and ribbed cuffs. Designed for cozy casual layering." 
    },
    { 
        id: 6, 
        name: "Satin Wrap Blouse", 
        price: 1099, 
        category: "top", 
        image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg", 
        rating: 4.4, 
        reviews: 82, 
        inStock: true,
        sizes: ["S", "M", "L", "XL"], 
        colors: ["Emerald Green", "Champagne"],
        description: "Luxurious satin wrap top featuring a deep V-neck cut, adjustable waist tie, and button-cuffed balloon sleeves. Transitions smoothly from office wear to night out." 
    },

    // Bags
    { 
        id: 7, 
        name: "Luxury Leather Handbag", 
        price: 2999, 
        category: "bag", 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400", 
        rating: 4.9, 
        reviews: 310, 
        inStock: true,
        sizes: ["One Size"], 
        colors: ["Tan Brown", "Classic Black"],
        description: "Handcrafted structured bag made from high-grade vegan leather. Features gold-toned metal hardware, double zip compartments, a tablet sleeve, and a detachable shoulder strap." 
    },
    { 
        id: 8, 
        name: "Minimalist Mini Sling Bag", 
        price: 1499, 
        category: "bag", 
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg", 
        rating: 4.2, 
        reviews: 74, 
        inStock: true,
        sizes: ["One Size"], 
        colors: ["Beige", "Pastel Pink"],
        description: "Compact cross-body mini bag built with magnetic snap closure, card slots, and an adjustable chain strap. Perfect for carrying your phone, keys, and lip balm." 
    },

    // Shoes
    { 
        id: 9, 
        name: "Classic White Sneakers", 
        price: 2199, 
        category: "shoes", 
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", 
        rating: 4.8, 
        reviews: 420, 
        inStock: true,
        sizes: ["UK 4", "UK 5", "UK 6", "UK 7"], 
        colors: ["White/Gold", "Pure White"],
        description: "Versatile low-top sneakers built with memory foam insoles, breathable perforations, and anti-slip rubber outsoles for all-day walkability." 
    },
    { 
        id: 10, 
        name: "Strappy Block Heels", 
        price: 2499, 
        category: "shoes", 
        image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg", 
        rating: 4.6, 
        reviews: 112, 
        inStock: true,
        sizes: ["UK 5", "UK 6", "UK 7"], 
        colors: ["Nude", "Black"],
        description: "2.5-inch block heels with cushioned footbeds and cross-over ankle straps. Engineered for stability and comfortable wear during extended events." 
    },

    // Beauty
    { 
        id: 11, 
        name: "Matte Lipstick Set (5 Pcs)", 
        price: 599, 
        category: "beauty", 
        image: "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg", 
        rating: 4.7, 
        reviews: 530, 
        inStock: true,
        sizes: ["5 Mini Sticks"], 
        colors: ["Nude & Berry Collection"],
        description: "Long-wear, transfer-proof matte lipsticks enriched with Vitamin E and Jojoba oil for weightless hydration without drying out your lips." 
    },
    { 
        id: 12, 
        name: "Hydrating Facial Serum", 
        price: 899, 
        category: "beauty", 
        image: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg", 
        rating: 4.9, 
        reviews: 245, 
        inStock: true,
        sizes: ["30 ml"], 
        colors: ["Clear Formula"],
        description: "Formulated with 2% pure Hyaluronic Acid and Niacinamide. Plumps skin texture, locks in 24-hour hydration, and improves overall natural glow." 
    }
];
function displayProducts(list) {
    const container = document.getElementById("products");
    if (!container) return;
    container.innerHTML = "";

    list.forEach((p) => {
        const originalIndex = products.findIndex(item => item.name === p.name);
        container.innerHTML += `
        <div class="card" onclick="openProduct(${originalIndex})">
            <img src="${p.image}" onerror="this.src='https://via.placeholder.com/400'">
            <h3>${p.name}</h3>
            <p style="font-weight:bold; color:#6c5ce7;">₹${p.price}</p>
            <div class="btns">
                <button onclick="event.stopPropagation(); openProduct(${originalIndex})">View Details</button>
                <button onclick="event.stopPropagation(); toggleWishlist(${originalIndex})">Wishlist</button>
            </div>
        </div>`;
    });
}

displayProducts(products);

function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

const searchInput = document.getElementById("search");
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(query));
        displayProducts(filtered);
    });
}

function openProduct(index) {
    localStorage.setItem("selectedProduct", JSON.stringify(products[index]));
    window.location.href = "product.html";
}

function toggleWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let product = products[index];
    let exists = wishlist.find(i => i.name === product.name);

    if (exists) {
        wishlist = wishlist.filter(i => i.name !== product.name);
        alert("Removed from wishlist ❌");
    } else {
        wishlist.push(product);
        alert("Added to wishlist ❤️");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function goToCart() { window.location.href = "cart.html"; }
function goToLogin() { window.location.href = "login.html"; }
function goToWishlist() { window.location.href = "wishlist.html"; }