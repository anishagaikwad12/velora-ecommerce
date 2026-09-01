// Array to store products fetched from Django backend
let products = [];

// Fetch products from Django database API on page load
async function loadProductsFromBackend() {
    try {
        let response = await fetch("http://127.0.0.1:8000/api/products/");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        products = await response.json();
        displayProducts(products); // Render products once fetched
    } catch (error) {
        console.error("Error connecting to Django backend:", error);
        const container = document.getElementById("products");
        if (container) {
            container.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Unable to load products. Please check if Django server is running.</p>";
        }
    }
}

// Display products in grid
function displayProducts(list) {
    const container = document.getElementById("products");
    if (!container) return;
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>No products found.</p>";
        return;
    }

    list.forEach((p) => {
        // Find index in master products array by ID
        const originalIndex = products.findIndex(item => item.id === p.id);
        
        container.innerHTML += `
        <div class="card" onclick="openProduct(${originalIndex})">
            <img src="${p.image}" onerror="this.src='https://via.placeholder.com/400'">
            <h3>${p.name}</h3>
            <p style="font-weight:bold; color:#6c5ce7;">₹${p.price}</p>
            <div class="btns">
                <button onclick="event.stopPropagation(); openProduct(${originalIndex})">View Details</button>
                <button onclick="event.stopPropagation(); toggleWishlist(${originalIndex})">❤️</button>
            </div>
        </div>`;
    });
}

// Filter by category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        displayProducts(filtered);
    }
}

// Live search listener
const searchInput = document.getElementById("search");
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(query));
        displayProducts(filtered);
    });
}

// Open product detail page
function openProduct(index) {
    if (products[index]) {
        localStorage.setItem("selectedProduct", JSON.stringify(products[index]));
        window.location.href = "product.html";
    }
}

// Toggle product in Wishlist
function toggleWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let product = products[index];
    
    if (!product) return;

    let exists = wishlist.find(i => i.id === product.id || i.name === product.name);

    if (exists) {
        wishlist = wishlist.filter(i => i.id !== product.id && i.name !== product.name);
        alert("Removed from wishlist ❌");
    } else {
        wishlist.push(product);
        alert("Added to wishlist ❤️");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// Global Navigation Helpers
function goToCart() { window.location.href = "cart.html"; }
function goToLogin() { window.location.href = "login.html"; }
function goToWishlist() { window.location.href = "wishlist.html"; }

// Initialize fetching on script load
loadProductsFromBackend();