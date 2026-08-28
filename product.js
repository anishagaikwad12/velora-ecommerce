let product = null;
try {
    product = JSON.parse(localStorage.getItem("selectedProduct"));
} catch (e) {
    console.error("Error loading product", e);
}

if (product) {
    // Basic Details
    document.getElementById("productImg").src = product.image || "https://via.placeholder.com/400";
    document.getElementById("productBrand").innerText = product.brand || "VELORA EXCLUSIVE";
    document.getElementById("productName").innerText = product.name;
    document.getElementById("productDesc").innerText = product.description || "High quality product crafted with premium material, designed for style and long-lasting comfort.";
    document.getElementById("productMaterial").innerText = product.material || "100% Premium Material | Machine wash according to care label instructions.";

    // Rating & Reviews
    document.getElementById("productRating").innerText = `⭐ ${product.rating || 4.5}`;
    document.getElementById("productReviews").innerText = `${product.reviews || 120} Ratings`;

    // Pricing & MRP Calculations
    const price = product.price || 999;
    const mrp = Math.round(price * 1.6); // Auto-calculate standard dummy MRP
    const discount = Math.round(((mrp - price) / mrp) * 100);

    document.getElementById("productPrice").innerText = "₹" + price;
    document.getElementById("productMrp").innerText = "₹" + mrp;
    document.getElementById("productDiscount").innerText = `(${discount}% OFF)`;

    // Sizes Dynamic Rendering
    const sizes = product.sizes || ["S", "M", "L", "XL"];
    const sizeContainer = document.getElementById("sizeContainer");
    sizeContainer.innerHTML = "";
    
    sizes.forEach((size, index) => {
        const btn = document.createElement("button");
        btn.innerText = size;
        btn.style.cssText = "padding: 8px 16px; border: 1px solid #d4d5d9; background: white; border-radius: 20px; cursor: pointer; font-size: 13px;";
        
        // Select first size by default
        if (index === 0) {
            btn.style.borderColor = "#ff3e6c";
            btn.style.color = "#ff3e6c";
            btn.style.fontWeight = "bold";
        }

        btn.onclick = function() {
            Array.from(sizeContainer.children).forEach(b => {
                b.style.borderColor = "#d4d5d9";
                b.style.color = "#000";
                b.style.fontWeight = "normal";
            });
            btn.style.borderColor = "#ff3e6c";
            btn.style.color = "#ff3e6c";
            btn.style.fontWeight = "bold";
        };
        sizeContainer.appendChild(btn);
    });

} else {
    alert("No product selected! Redirecting to shop.");
    window.location.href = "index.html";
}

// Pincode Availability Checker
function checkPincode() {
    const pin = document.getElementById("pincodeInput").value;
    const status = document.getElementById("pincodeStatus");
    if (pin.length === 6 && !isNaN(pin)) {
        status.innerHTML = `<span style="color: green;">✓ Delivery available by ${new Date(Date.now() + 3*24*60*60*1000).toDateString()}</span>`;
    } else {
        status.innerHTML = `<span style="color: red;">✗ Please enter a valid 6-digit pincode</span>`;
    }
}

// Add to Cart Logic
function addToCartDetail() {
    if (!product) return;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(i => i.name === product.name);

    if (existingItem) {
        existingItem.qty = (existingItem.qty || 1) + 1;
    } else {
        cart.push({
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}

// Add to Wishlist Logic
function addToWishlistDetail() {
    if (!product) return;
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let exists = wishlist.find(i => i.name === product.name);

    if (!exists) {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("Added to Wishlist ❤️");
    } else {
        alert("Already in Wishlist ❤️");
    }
}