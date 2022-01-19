"use strict";

// task #1
// let userFirstName = prompt("How is your first name?");
// let userLastName = prompt("How is your last name?");
// let userAge = prompt("How old are you?");

// let userInfo = `${userFirstName} ${userLastName}, ${userAge}`;

// alert(userInfo);

// task #2
// let userNumber1 = prompt("Please, input first number");
// let userNumber2 = prompt("Please, input second number");

// let sum = `${userNumber1} + ${userNumber2} = ${+userNumber1 + +userNumber2}`;
// let subtraction = `${userNumber1} - ${userNumber2} = ${
//   userNumber1 - userNumber2
// }`;
// let division = `${userNumber1} / ${userNumber2} = ${userNumber1 / userNumber2}`;
// let exponent = `${userNumber1} ** ${userNumber2} = ${
//   userNumber1 ** userNumber2
// }`;
// let multiplying = `${userNumber1} * ${userNumber2} = ${
//   userNumber1 * userNumber2
// }`;

// let finalResult = `${sum}, ${subtraction}, ${division}, ${exponent}, ${multiplying}`;

// console.log(finalResult);

// task #3
// let currentUserAge = +prompt("How old are you?");

// if (currentUserAge < 18) {
//   alert("Данная страница доступна только для взрослых");
// }

// task #4
// let userNumber4 = +prompt("Please input number");

// switch (true) {
//   case userNumber4 % 2 == 0:
//     alert("Число четное");
//     break;
//   case userNumber4 % 2 > 0:
//     alert("Число нечетное");
//     break;
//   default:
//     alert("Вы не ввели число");
// }

// task #5
// let userNumber5 = +prompt("Please input number");
// let randomNumber = Math.random() * 10;

// randomNumber = Math.round(randomNumber);
// let compareResult = userNumber5 > randomNumber;

// console.log(userNumber5, randomNumber, compareResult);

// task #6
// let userNumber6 = +prompt("Please input number");

// if (!isNaN(userNumber6) && typeof userNumber6 == "number") {
//   console.log(`Вы ввели число ${userNumber6}`);
// } else {
//   console.log("Вы ввели не число");
// }

// task #7
// let date = new Date();
// let currentMonth = date.getMonth() + 1;

// if (currentMonth < 3 || currentMonth == 12) {
//   console.log("Сейчас зима");
// } else if (currentMonth > 2 && currentMonth < 6) {
//   console.log("Сейчас весна");
// } else if (currentMonth > 5 && currentMonth < 9) {
//   console.log("Сейчас лето");
// } else {
//   console.log("Сейчас осень");
// }

// switch (true) {
//   case currentMonth < 3 || currentMonth == 12:
//     console.log("Сейчас зима");
//     break;
//   case currentMonth > 2 && currentMonth < 6:
//     console.log("Сейчас весна");
//     break;
//   case currentMonth > 5 && currentMonth < 9:
//     console.log("Сейчас лето");
//     break;
//   default:
//     console.log("Сейчас осень");
// }

// task #8
let number8 = +prompt("Please enter a number between 0 and 100");

if (number8 >= 0 && number8 <= 100) {
  number8 = Math.abs(number8) % 101;
  let auxiliaryNumber = number8 % 10;

  if (number8 > 10 && number8 < 20) {
    console.log(`Ваша оценка: ${n} баллов`);
  } else if (auxiliaryNumber > 1 && auxiliaryNumber < 5) {
    console.log(`Ваша оценка: ${number8} балла`);
  } else if (auxiliaryNumber == 1) {
    console.log(`Ваша оценка: ${number8} балл`);
  } else console.log(`Ваша оценка: ${number8} баллов`);
} else {
  console.log(`Введите число в диапазоне от 0 до 100`);
}
