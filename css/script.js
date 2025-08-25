let cart = [];

function addToCart(product) {
  cart.push(product);
  document.getElementById("cart").innerHTML = "Корзина: " + cart.join(", ");
}