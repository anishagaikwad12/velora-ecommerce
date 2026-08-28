let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let container = document.getElementById("wishlist-container");

function displayWishlist() {
    if (!container) return;
    container.innerHTML = "";

    if (wishlist.length === 0) {
        container.innerHTML = "<h3 style='grid-column: 1/-1; text-align: center;'>Your wishlist is empty ❤️</h3>";
        return;
    }

    wishlist.forEach((item, index) => {
        container.innerHTML += `
        <div style="border: 1px solid #eee; border-radius: 12px; padding: 15px; text-align: center; background: #fff; box-shadow: 0 4px 10px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between;">
            <img src="${item.image}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px;" onerror="this.src='https://via.placeholder.com/400'">
            <h3 style="font-size: 18px; margin: 12px 0 6px 0;">${item.name}</h3>
            <p style="color: #6c5ce7; font-weight: bold; margin-bottom: 12px;">₹${item.price}</p>

            <div style="display: flex; gap: 8px; justify-content: center;">
                <button onclick="addToCartFromWishlist(${index})" style="padding: 8px 12px; border: none; background: #ffc0cb; color: #000; border-radius: 6px; cursor: pointer; font-size: 13px;">Add to Cart</button>
                <button onclick="removeItem(${index})" style="padding: 8px 12px; border: none; background: #ffc0cb; color: #000; border-radius: 6px; cursor: pointer; font-size: 13px;">Remove</button>
            </div>
        </div>`;
    });
}

function removeItem(index) {
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
}

function addToCartFromWishlist(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = wishlist[index];

    let item = cart.find(i => i.name === product.name);
    if (item) {
        item.qty = (item.qty || 1) + 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}

displayWishlist();