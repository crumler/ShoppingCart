'use strict';

//! Grabs the "Add to Cart" button
let carts = document.querySelectorAll(".add-cart");

//! Full list of offered products
let products = [
    {
        name: "Grey T-Shirt",
        tag: "greytshirt",
        price: 15,
        inCart: 0
    },
    {
        name: "Grey Hoodie",
        tag: "greyhoodie",
        price: 15,
        inCart: 0
    },
    {
        name: "Black T-Shirt",
        tag: "blacktshirt",
        price: 15,
        inCart: 0
    },
    {
        name: "Black Hoodie",
        tag: "blackhoodie",
        price: 15,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
};

//! Function that checks the number of products currently in cart and updates the Cart button's number value on page load
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

//! Local Storage function for cart
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".cart span").textContent = 1;
    };
};

onLoadCartNumbers();