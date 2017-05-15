var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
let price = Math.floor(Math.random() * 100)
cart.push({[item]: price})
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  let newArray = []
  let cartLength = cart.length
  if (cartLength === 0) {
    console.log("Your shopping cart is empty.")
    }
  for (var i = 0; i < cart.length; i++) {
   let cartObject = cart[i]
    let item = Object.keys(cartObject)[0]
    let price = cartObject[item]
    let blah = `${item} at $${price}`
    newArray.push(blah)
    }
    console.log(`In your cart, you have ${newArray.join(", ")}.`)
  }


function total() {
  let totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
   let cartObject = cart[i]
   let item = Object.keys(cartObject)[0]
   let price = cartObject[item]
   totalPrice += price
  }
  return totalPrice
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++) {
    let itemName = Object.keys(cart[i])[0]
    if (itemName === item) {
    cart.splice(i - 1, 1)
    return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === "undefined"){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []

}
