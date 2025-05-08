// 1. Calculate total cart value from an array of items with price and quantity.
const cartItems = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 700, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 },
  { name: "Monitor", price: 12000, quantity: 1 },
];
// 1 way to do this quetion 
// const pricearr = cartItems.map((items) => items.price * items.quantity);
// console.log(pricearr);
// const price = pricearr.reduce((acc, num)=> acc + num + 0);
// console.log(price);

// 2 way to do this quetion 
const totalprice = cartItems.reduce((acc,num)=> acc+(num.price*num.quantity),0)
console.log(totalprice)
