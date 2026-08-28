let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    let c = document.getElementById("cart");
    let total = 0;

    if (!c) return;

    if (cart.length === 0) {
        c.innerHTML = "<h3>Your cart is empty 😢</h3>";
        document.getElementById("total").innerText = "Total ₹0";
        return;
    }

    c.innerHTML = "";

    cart.forEach((i, index) => {
        let quantity = i.qty || 1;
        total += i.price * quantity;

        c.innerHTML += `
        <div style="display: flex; align-items: center; justify-content: space-between; border: 1px solid #ddd; padding: 15px; margin-bottom: 12px; border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                ${i.image ? `<img src="${i.image}" width="60" height="60" style="object-fit: cover; border-radius: 6px;">` : ''}
                <div>
                    <h4 style="margin: 0 0 5px 0;">${i.name}</h4>
                    <p style="margin: 0; color: #666;">₹${i.price}</p>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
                <button onclick="dec(${index})" style="padding: 4px 10px; cursor: pointer;">-</button>
                <span style="font-weight: bold; min-width: 20px; text-align: center;">${quantity}</span>
                <button onclick="inc(${index})" style="padding: 4px 10px; cursor: pointer;">+</button>
                <button onclick="del(${index})" style="padding: 4px 10px; margin-left: 10px; cursor: pointer; color: red;">Remove</button>
            </div>
        </div>`;
    });

    document.getElementById("total").innerText = "Total ₹" + total;
}

function inc(i) {
    cart[i].qty = (cart[i].qty || 1) + 1;
    save();
}

function dec(i) {
    let quantity = cart[i].qty || 1;
    if (quantity > 1) {
        cart[i].qty = quantity - 1;
    }
    save();
}

function del(i) {
    cart.splice(i, 1);
    save();
}

function save() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Order placed 💜");
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
}

renderCart();