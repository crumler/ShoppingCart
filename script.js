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
        price: 20,
        inCart: 0
    },
    {
        name: "Black T-Shirt",
        tag: "blacktshirt",
        price: 10,
        inCart: 0
    },
    {
        name: "Black Hoodie",
        tag: "blackhoodie",
        price: 25,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
};

//! Function that checks the number of products currently in cart and updates the Cart button's number value on page load
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
};

//! Local Storage function for cart
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".cart span").textContent = 1;
    };

    setItems(product);
};

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log("My carItems are", cartItems);

    //! If statement starts adding to inCart value for each product item
    if (cartItems !== null) {

        //! This checks to see if a second (or more) product is clicked on and, if so, adds it to the "product" object

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;

        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
};

//! Function that calculates total cost of product(s) added to cart
function totalCost(product) {
    console.log("The product price is ", product.price);

    let cartCost = localStorage.getItem("totalCost");
    
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
};

onLoadCartNumbers();