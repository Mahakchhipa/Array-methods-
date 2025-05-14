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
const totalprice = cartItems.reduce(
  (acc, num) => acc + num.price * num.quantity,
  0
);
console.log(totalprice);
const products = [
  { name: "Smartphone", price: 25000 },
  { name: "TV", price: 55000 },
  { name: "AC", price: 40000 },
  { name: "Smartwatch", price: 10000 },
];

const price = products.map((p) => p.price);
// console.log(price)
let maxitem = products.reduce(
  (acc, num) => (acc < num.price ? num.price : acc),
  0
);
console.log(maxitem);
const inventory = [
  { name: "Shampoo", category: "Beauty" },
  { name: "Toothpaste", category: "Beauty" },
  { name: "Sofa", category: "Furniture" },
  { name: "Dining Table", category: "Furniture" },
  { name: "Fan", category: "Electronics" },
];

const cate = inventory.reduce((acc, num) => {
  acc[num.category] = [...(acc[num.category] || []), num.name];
  return acc;
}, {});
console.log(cate);

const stockList = [
  { id: 1, name: "Shoes", inStock: true },
  { id: 2, name: "Jeans", inStock: false },
  { id: 3, name: "Jacket", inStock: false },
  { id: 4, name: "Shirt", inStock: true },
  { id: 5, name: "paint", inStock: false },
  { id: 6, name: "sockes", inStock: true },
  { id: 7, name: "suit", inStock: true },
  { id: 8, name: "duppata", inStock: true },
  { id: 9, name: "Jacket", inStock: false },
  { id: 10, name: "Jacket", inStock: false },
];

const outproduct = stockList.reduce(
  (acc, stock) => (!stock.inStock ? acc + 1 : acc),
  0
);
console.log(outproduct);

const subscriptions = [
  { plan: "Pro", revenue: 999 },
  { plan: "Basic", revenue: 499 },
];
const totalRevenue = subscriptions.reduce((sum, s) => sum + s.revenue, 0);
console.log(totalRevenue);
