let arr = [ "task1","task2","task3","task4","task5","task6","task7","task8","task9","task10",];
let page = 1;
let itemsPerpage = 2;

let users = arr.slice((page-1)*itemsPerpage,page*itemsPerpage);
console.log(users)
