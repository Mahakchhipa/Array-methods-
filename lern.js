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
  const suffix = h >= 12 ? "PM" : "AM";
  if (h > 12) {
    h = h % 12;
  }
  return `${h}:${m} ${suffix}`;
});

console.log(newtime);

const patients1 = [25, 60, 45];
const patientAges = patients1.map((age) => `patient: ${age} is yrs`);

console.log(patientAges);

const staff = ["Nurse A", "Nurse B"];
const attendance = staff.map((name) => ({ name, present: true }));
console.log(attendance);

const key = "city";

const obj = {
  names: "mahak",
  age: 21,
  [key]: "jaipur",
};

console.log(obj);

const obj5 = {
  [{ obj1: "hi" }]: "value",
};

console.log(obj5);

const patid = [125, 5504, 7896, 452, 76952, 3684];
const newpetid = patid.map((id) => `http://goole.com/${id}`);

console.log(newpetid);

const names = ["Ravi Kumar", "Nidhi Das"];
const emails = names.map(
  (name) => name.toLowerCase().replace(" ", ".") + "@hospital.com"
);

console.log(emails);

const slots = ["10:00", "14:00"];
const typedSlots = slots.map((time) => ({
  time,
  type: "General Consultation",
}));
console.log(typedSlots);

const addhar = [
  "123456789024",
  "123456586227",
  "698556789069",
  "365256789070",
  "469856789155",
];
//
// const mainadhar = addhar.map((newno) =>
//   newno.replace(newno.slice(0, 9), "**** **** ")
// );
// console.log(mainadhar); this is first logic for do this quwtuon

const mainadhar = addhar.map((newno) => "**** **** " + newno.slice(-4));
console.log(mainadhar);

// this is second logic fo do this quwetion

const testNames = ["Glucose", "Hemoglobin"];
const testCodes = testNames.map((name) => `${name} [TST-${name.length * 10}]`);
console.log(testCodes);

const coordinates = [
  { lat: 26.91, lng: 75.78 },
  { lat: 26.85, lng: 75.8 },
];
const mapLinks = coordinates.map(
  (coord) => `https://maps.google.com/?q=${coord.lat},${coord.lng}`
);
console.log(mapLinks);

const patientNames = ["Sita", "Ram", "Lakshman"];
const tokens = patientNames.map((name, index) => ({ name, token: index + 1 }));

console.log(tokens);

const dobs = [2000, 1995, 2023, 2002, 2005, 1978, 2009, 1968];
const newdob = new Date().getFullYear();
console.log(newdob);
const age = dobs.map((date) => newdob - date);
console.log(age);

const vehicles = ["Amb1", "Amb2"];
const plates = vehicles.map((v, i) => `${v} [RJ-14-${1004 + i}]`);
console.log(plates);

// const phones = ['9876543210', '9123456789'];
// const masked = phones.map(ph => `${ph.slice(0, 3)}****${ph.slice(-2)}`);
// console.log(masked);

// this 1st methed for do this quetion

const phones = ["9876543210", "9123456789", "7852456789", "698556789"];
const masked = phones.map((ph) => ph.replace(ph.slice(2, 7), "*****"));
console.log(masked);

// this is 2nd way to do this quetions

const patientsnew = [
  { name: "Ravi", admitted: true },
  { name: "Ruhi", admitted: false },
  { name: "Sita", admitted: false },
  { name: "Sanjay", admitted: true },
  { name: "Radha", admitted: true },
  { name: "Mahi", admitted: false },
  { name: "Sivansh", admitted: true },
];

// const admited = patientsnew.filter((mariz) => mariz.admitted);
// console.log(admited);

const admited = patientsnew.filter((mariz) => !mariz.admitted);
console.log(admited);

// for false conditions

const employeesnew = [
  { name: "Amit", status: "active" },

  { name: "Neha", status: "inactive" },
  { name: "Riya", status: "active" },
  { name: "Zoya", status: "active" },
  { name: "Ray", status: "active" },
  { name: "Muskan", status: "inactive" },
  { name: "Hansh", status: "active" },
];

const activeempo = employeesnew.filter((active) => active.status === "active");
console.log(activeempo);

const appointments = [{ time: "2025-05-08" }, { time: "2025-05-15" }];
const upcoming = appointments.filter((a) => new Date(a.time) > new Date());
// console.log(upcoming);
// subscription loggic quetions

const usersdate = [
  { name: "Ravi", expiryDate: "2025-05-08" },

  { name: "Megha", expiryDate: "2025-05-11" },
  { name: "Shyam", expiryDate: "2025-05-09" },
  { name: "Kunal", expiryDate: "2025-05-12" },
  { name: "Radha", expiryDate: "2025-05-15" },
];
const today = new Date();
today.setHours(0, 0, 0, 0); // Normalize time

// console.log(today);

const remainerthree = 3;

// const exp = new Date( "2025-05-25" );
// console.log(exp)

const usereemainder = usersdate.filter((u) => {
  const exp = new Date(u.expiryDate);
  exp.setHours(0, 0, 0, 0);
  const diffrent = exp - today;
  const remain = diffrent / (1000 * 60 * 60 * 24);
  return remain <= remainerthree && remain >= 0;
});
console.log(usereemainder);

// intersection type quetions
const candidateA = ["JavaScript", "Python", "React", "c++"];
const candidateB = ["Python", "Java", "React", "c++"];
const commenskill = candidateA.filter((skill) => candidateB.includes(skill));
console.log(commenskill);

const studentA = ["Math", "Physics", "java", "Biology"];
const studentB = ["Physics", "php", "c++", "Chemistry"];

// const uncommen =  [...studentA.filter(sub => !studentB.includes(sub)), ...studentB.filter(sub => !studentA.includes(sub))];
// console.log(uncommen)

// 1way to do this quetion

// 2nd way to do this same quetion

const A = studentA.filter((s) => !studentB.includes(s));
const B = studentB.filter((s) => !studentA.includes(s));

const C = [...A, ...B];
console.log(C);

const faculty1 = ["AI", "ML", "DSA"];
const faculty2 = ["ML", "Cloud"];
const uniqueCourses = [
  ...faculty1.filter((c) => !faculty2.includes(c)),
  ...faculty2.filter((c) => !faculty1.includes(c)),
];
console.log(uniqueCourses);
