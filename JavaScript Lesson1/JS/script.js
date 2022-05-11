// 1)
alert("Привет, это работа Кондратович Елизаветы");
// 2)
let planetName = 'World';
const myAge = '25';
let brokenCar = 'BMV';
let headerColor = 'red';
let isAdmin = 'yes';
console.log(planetName);
console.log(myAge);
console.log(brokenCar);
console.log(headerColor);
console.log(isAdmin);
// 3)
const myName = 'Лиза Кондратович';
console.log(`Привет, меня зовут ${myName}, мне ${myAge} лет`);
// 4)
let teacherName = prompt("Ваше имя?", "Имя");
console.log(`Мою работу проверяет ${teacherName}`);
// 5)
console.log(typeof "String");
console.log(typeof 2000);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
// 6)
let newStr = "37";

newStr = Number(newStr);
console.log(newStr);

newStr = Boolean(newStr);
console.log(newStr);

let newValue = true;

newValue = String(newValue);
console.log(newValue);

newValue = Number(newValue);
console.log(newValue);

let newNum = 2007;

newNum = String(newNum);
console.log(newNum);

newNum = Boolean(newNum);
console.log(newNum);
// 7)
let name = "Ivan";
let surname = name;
console.log(surname);