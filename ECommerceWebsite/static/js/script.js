// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'static/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 19.99, image: 'static/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'static/images/product3.jpg' },
    { id: 4, name: 'Product 4', price: 19.99, image: 'static/images/product4.jpg' },
    { id: 5, name: 'Product 5', price: 19.99, image: 'static/images/product5.jpg' },
    { id: 6, name: 'Product 6', price: 19.99, image: 'static/images/product6.jpg' },
    { id: 7, name: 'Product 7', price: 19.99, image: 'static/images/product7.jpg' },
    { id: 8, name: 'Product 8', price: 19.99, image: 'static/images/product8.jpg' },
    { id: 9, name: 'Product 9', price: 19.99, image: 'static/images/product9.jpg' },
    { id: 10, name: 'Product 10', price: 19.99, image: 'static/images/product10.jpg' },
];

let cart = []; // Array to hold cart items

// Load the cart from local storage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save the cart to local storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart();
        alert(`${product.name} has been added to the cart!`);
    }
}

// Remove product from the cart
function removeFromCart(productId) {
    cart = cart.filter(p => p.id !== productId);
    saveCart();
    displayCart();
}

// Display the cart items on the cart page
function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Clear previous items
    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(product => {
            total += product.price;
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <span>${product.name}</span>
                <span>$${product.price.toFixed(2)}</span>
                <button onclick="removeFromCart(${product.id})">Remove</button>
            `;
            cartList.appendChild(div);
        });
    }

    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}

// Checkout function
function checkout() {
    alert('Thank you for shopping with us!');
}

// On page load
window.onload = function() {
    loadCart();
    // Display cart on the cart page
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
};
