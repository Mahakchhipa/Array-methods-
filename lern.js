let arr = [
  "task1",
  "task2",
  "task3",
  "task4",
  "task5",
  "task6",
  "task7",
  "task8",
  "task9",
  "task10",
];
let page = 1;
let itemsPerpage = 2;

let users = arr.slice((page - 1) * itemsPerpage, page * itemsPerpage);
console.log(users);

let f1 = "Image.jpg";
let extantion = f1.slice(-4);
console.log(extantion);
let filename = f1.slice(0, -4);
console.log(filename);

let email = "mehekjajpuraom700@gamil.com";
let domain = email.slice(-10);
console.log(domain);
let nameEmail = email.slice(0, -10);
console.log(nameEmail);

let friuts = ["Apple", "Grapes", "Mango", "Date"];
friuts.splice(1, 2, "Banana", "Orange");
console.log(friuts);

// let str = "madam";
// let arr1 = str.split("").reverse().join("")
// console.log(arr1==str);

let a = 122451;
let str = a.toString();
let arr1 = str.split("").reverse().join("");
console.log(arr1 == str);

let fal = ["Apple", "Orange", "Kiwi", "Banana", "Date"];
fal.forEach((fal) => console.log(fal));
// yeh ek lamda function h jo without crulybraces use likha use kra jata h\

const patients = ["7742831076", "9468792150", "9785301012", "9252605875"];
patients.forEach((number) => console.log(`sending the msg ${number}`));

const remainders = [
  {
    name: "mahak",
    madeicine: "peractamol1",
  },
  {
    name: "radha",
    madeicine: "peractamol2",
  },
  {
    name: "mahi",
    madeicine: "peractamol3",
  },
  {
    name: "kavita",
    madeicine: "peractamol4",
  },
  {
    name: "ritu",
    madeicine: "peractamol5",
  },
];

remainders.forEach((remiand) =>
  console.log(
    `this id medicine of patineet  ${remiand.name} ${remiand.madeicine}`
  )
);

const entries = [
  { name: "riya", late: true },
  { name: "mahi", late: false },
  { name: "ritu", late: false },
  { name: "ziya", late: true },
  { name: "payal", late: false },
  { name: "sita", late: true },
];

entries.forEach((data)=>{if(!data.late){
    console.log(data.name + " your fees is pening");
}});
