const products = [
    {
        id: 1,
        name: "Apple",
        price: 100
    },

    {
        id: 2,
        name: "Laptop",
        price: 50000
    },

    {
        id: 3,
        name: "Shoes",
        price: 2000
    }
];


let cart = [];


function displayProducts() {

    const productsContainer =
        document.getElementById("products");

    productsContainer.innerHTML = "";


    products.forEach(product => {

        const productDiv =
            document.createElement("div");

        productDiv.className = "product";


        productDiv.innerHTML = `

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>

        `;


        productsContainer.appendChild(productDiv);

    });
}


function addToCart(productId) {

    const product =
        products.find(item => item.id === productId);


    cart.push(product);


    displayCart();
}


function displayCart() {

    const cartItems =
        document.getElementById("cartItems");

    const total =
        document.getElementById("total");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Cart is empty</p>";

        total.innerText = 0;

        return;
    }


    let totalPrice = 0;


    cart.forEach((item, index) => {

        totalPrice += item.price;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <span>
                ${item.name} - ₹${item.price}
            </span>

            <button onclick="removeFromCart(${index})">
                Remove
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    total.innerText = totalPrice;
}


function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();
}


displayProducts();