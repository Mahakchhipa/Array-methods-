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

// 7. Count the number of products per price range.
const shopItems = [
  { name: "USB Cable", price: 200 },
  { name: "Bluetooth Speaker", price: 1200 },
  { name: "Monitor", price: 9500 },
  { name: "Gaming Chair", price: 15000 },
  { name: "Monitor", price: 9500 },
  { name: "Gaming remote", price: 6000 },
  { name: "Monitor cpu", price: 9500 },
  { name: "Gaming Chair", price: 7800 },
  { name: "Laptop", price: 60000 },
];

const stockrange = shopItems.reduce((acc, items) => {
  let range;
  if (items.price <= 500) range = " under 500 price ";
  else if (items.price >= 500 && items.price <= 1000)
    range = " price under 1000";
  else range = "1000 above the range ";
  acc[range] = (acc[range] || 0) + 1;
  return acc;
}, {});

console.log(stockrange);

const productCatalog = [
  { name: "iPhone", brand: "Apple" },
  { name: "MacBook", brand: "Apple" },
  { name: "Galaxy S21", brand: "Samsung" },
  { name: "Galaxy Tab", brand: "Samsung" },
  { name: "Pixel", brand: "Google" },
  { name: "Tab", brand: "Samsung" },
  { name: "Pixel phone 15", brand: "Google" },
];

const shopItems1 = [
  { name: "USB Cable", price: 200 },
  { name: "Bluetooth Speaker", price: 1200 },
  { name: "Keyboard", price: 700 },
  { name: "Monitor", price: 9500 },
  { name: "Gaming Chair", price: 15000 },
  { name: "Laptop", price: 60000 },
  { name: "Phone", price: 1200 },
  { name: "Tablet", price: 1500 },
  { name: "Laptop", price: 2500 },
  { name: "Shampoo", price: 50 },
  { name: "Toothpaste", price: 300 },
  { name: "Sofa", price: 10000 },
  { name: "Dining Table", price: 19000 },
  { name: "Fan", price: 800 },
];
const itemsrange = shopItems1.reduce((acc, items) => {
  let range;
  if (items.price < 500) range = "Under 500";
  else if (items.price >= 500 && items.price < 1000) range = "500-1000";
  else if (items.price >= 1000 && items.price < 5000) range = "1000-5000";
  else if (items.price >= 5000 && items.price < 10000) range = "5000-10000";
  else range = "10,000 and above";
  acc[range] = [...(acc[range] || []), items.name];
  return acc;
}, {});
console.log(itemsrange);

const listing = [
  { name: "Washing Machine" },
  { name: "Refrigerator" },
  { name: "Oven" },
  { name: "Dishwasher" },
];

const string = listing.map((list) => list.name).join(" , ");
console.log(string);

const listingpro = [
  { name: "Washing Machine" },
  { name: "Refrigerator" },
  { name: "Oven" },
  { name: "Dishwasher" },
];

// const pname = listingpro.map((list) =>`${list.name} `)

const paname = listingpro.map((list) => list.name).join(" ,");
console.log(paname);

const appointments = [
  { doctor: "Dr. Roy", patient: "Anita" },
  { doctor: "Dr. Roy", patient: "Sumit" },
  { doctor: "Dr. Khan", patient: "Rita" },
  { doctor: "Dr. Sen", patient: "Akash" },
  { doctor: "Dr. Roy", patient: "Tina" },
  { doctor: "Dr. Sen", patient: "jai" },
  { doctor: "Dr. Roy", patient: "rohan" },
];

const treat = appointments.reduce((acc, appoint) => {
  acc[appoint.doctor] = [...(acc[appoint.doctor] || []), appoint.patient];
  return acc;
}, {});
console.log(treat)