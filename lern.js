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

const patients = ["7742831786", "9468752150", "9785301012", "9632605875"];
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

entries.forEach((data) => {
  if (!data.late) {
    console.log(data.name + " your fees is pening");
  }
});

const bills = [1000, 1500, 2000];
const billsWithGST = bills.map((bill) => bill * 1.18);
console.log(billsWithGST);

const employees = ["raj", "neha", "amit"];
const capitalized = employees.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalized);

const doctors = ["Singh", "Verma", "Chatterjee"];
const fullNames = doctors.map((name) => `Dr. ${name}`);
console.log(fullNames);

const testResults = [85, 120, 140];
const formattedResults = testResults.map((val) => `${val} mg/dL`);
console.log(formattedResults);

const employee = ["mahak", "saksham", "malika", "saham"];
let newempolyee = employee.map(
  (empo) => empo.charAt(0).toUpperCase() + empo.slice(1)
);
console.log(newempolyee);

const times = ["09:00", "13:00", "18:30", "5:00", "17:45", "16:55", "6:02"];
let newtime = times.map((t) => {
  h = parseInt(t.slice(0, 2));
  m = t.slice(3);
  const suffix = h >= 12 ? "PM" :"AM" ;
  if (h > 12) {
    h = h % 12;
  }
  return `${h}:${m} ${suffix}`;
});

console.log(newtime);

const patients1 = [25, 60, 45]; 
const patientAges = patients1.map(age => `patient: ${age} is yrs`); 

console.log(patientAges)

const staff = ['Nurse A', 'Nurse B']; 
const attendance = staff.map(name => ({ name, present: true })); 
  console.log(attendance);


  const key = "city";

  const obj ={
    names :"mahak",
    age:21,
     [key]:"jaipur"
  }

  console.log(obj)