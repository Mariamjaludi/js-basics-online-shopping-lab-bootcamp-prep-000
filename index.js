var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 // write your code here
 cartObject = {};
 var price = Math.floor(Math.random() * 100);
 cartObject.itemName = item;
 cartObject.itemPrice = price;
 cart.push(cartObject);
 return 
}

function viewCart() {
  // write your code here
  if (cart.lenth === 0){
    return "Your shopping cart is empty.";
  }
  else{
    var sentence = "In your cart, you have ";
    for(let i=0; i< cart.length; i++){
      if (cart.length === 1){
      sentence = sentence + `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      return sentence;
      }
      else if (i === cart.length - 1){
        sentence = sentence + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        return sentence;
      }
      else{
          sentence = sentence + `${cart[i].itemName} at $${cart[i].itemPrice},`;
      }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
