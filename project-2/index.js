"use strict";

// Task #1
// let userFirstName = prompt("How is your first name?");
// let userLastName = prompt("How is your last name?");
// let userAge = prompt("How old are you?");

// let userInfo = `${userFirstName} ${userLastName}, ${userAge}`;

// alert(userInfo);

// Task #2
// let userFirstNumber = +prompt("Please, input first number");
// let userSecondNumber = +prompt("Please, input second number");

// let sum = `${userFirstNumber} + ${userSecondNumber} = ${
//   userFirstNumber + userSecondNumber
// }`;
// let subtraction = `${userFirstNumber} - ${userSecondNumber} = ${
//   userFirstNumber - userSecondNumber
// }`;
// let division = `${userFirstNumber} / ${userSecondNumber} = ${
//   userFirstNumber / userSecondNumber
// }`;
// let exponent = `${userFirstNumber} ** ${userSecondNumber} = ${
//   userFirstNumber ** userSecondNumber
// }`;
// let multiplying = `${userFirstNumber} * ${userSecondNumber} = ${
//   userFirstNumber * userSecondNumber
// }`;

// let finalResult = `${sum}, ${subtraction}, ${division}, ${exponent}, ${multiplying}`;

// console.log(finalResult);

// Task #3
// let currentUserAge = +prompt("How old are you?");

// if (currentUserAge < 18) {
//   alert("Данная страница доступна только для взрослых");
// }

// Task #4
// let userNumber4 = +prompt("Please input number");

// if (!isNaN(userNumber4)) {
//   if (userNumber4 % 2 === 0) {
//     alert("Число четное");
//   } else {
//     alert("Число нечетное");
//   }
// } else {
//   alert("Вы не ввели число");
// }

// Task #5
// let userNumber5 = +prompt("Please input number");
// let randomNumber = Math.round(Math.random() * 10);
// let compareResult = userNumber5 > randomNumber;

// console.log(userNumber5, randomNumber, compareResult);

// Task #6
// let userNumber6 = +prompt("Please input number");

// if (!isNaN(userNumber6)) {
//   console.log(`Вы ввели число ${userNumber6}`);
// } else {
//   console.log("Вы ввели не число");
// }

// Task #7
let date = new Date();
let currentMonth = date.getMonth() + 1;

// Method if/else
// if (currentMonth < 3 || currentMonth === 12) {
//   console.log("Сейчас зима");
// } else if (currentMonth > 2 && currentMonth < 6) {
//   console.log("Сейчас весна");
// } else if (currentMonth > 5 && currentMonth < 9) {
//   console.log("Сейчас лето");
// } else {
//   console.log("Сейчас осень");
// }

// Method switch
switch (currentMonth) {
  case 12:
  case 1:
  case 2:
    console.log("Сейчас зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Сейчас весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Сейчас лето");
    break;
  default:
    console.log("Сейчас осень");
}

// Task #8
// let number8 = +prompt("Please enter a number between 0 and 100");

// if (number8 >= 0 && number8 <= 100) {
//   number8 = Math.abs(number8) % 101;
//   let auxiliaryNumber = number8 % 10;

//   if (number8 > 10 && number8 < 20) {
//     console.log(`Ваша оценка: ${n} баллов`);
//   } else if (auxiliaryNumber > 1 && auxiliaryNumber < 5) {
//     console.log(`Ваша оценка: ${number8} балла`);
//   } else if (auxiliaryNumber === 1) {
//     console.log(`Ваша оценка: ${number8} балл`);
//   } else console.log(`Ваша оценка: ${number8} баллов`);
// } else {
//   console.log(`Введите число в диапазоне от 0 до 100`);
// }
