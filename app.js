// SMART CANTEEN - MAIN JAVASCRIPT

let cart = JSON.parse(localStorage.getItem("canteenCart")) || [];


// ADD TO CART
function addToCart(name, price) {

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    localStorage.setItem(
        "canteenCart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(name + " added to cart!");
}


// UPDATE CART COUNT
function updateCartCount() {

    let cartCount =
        document.getElementById("cartCount");

    if (!cartCount) {
        return;
    }

    let total = 0;

    cart.forEach(function(item) {

        total += item.quantity;

    });

    cartCount.textContent = total;
}


// FILTER FOOD
function filterFood(category, button) {

    let foodItems =
        document.querySelectorAll(".food-item");

    let buttons =
        document.querySelectorAll(".category-btn");


    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    if (button) {
        button.classList.add("active");
    }


    foodItems.forEach(function(item) {

        if (
            category === "all" ||
            item.dataset.category === category
        ) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}


// RUN WHEN PAGE LOADS
document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCartCount();

    }
);