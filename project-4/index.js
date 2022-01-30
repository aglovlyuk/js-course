"use strict";

// Task #1
// const array = [2, 18, 33, 40, 1, 0, -3, 10];
// let sum = 0,
//     average;

// for (let number of array) {
//     sum += number;
// }

// average = sum / array.length;
// console.log(sum, average);

// Task #2
// const array = [2, "olol", 3, 10, true, null, 11, "100"];
// let sum = 0;

// for (let number of array) {
//     if (typeof number === "number") sum += number;
// }

// console.log(sum);

// Task #3
// const array = [];

// for (let i = 0; i < 10; i++) {
//     let num = Math.random() * 10;
//     array.push(+num.toFixed(2));
// }

// console.log(array);

// for (let number of array) {
//     console.log(number ** 5);
// }

// Task #4
// const multTable = [];

// for (let i = 0; i < 10; i++) {
//     multTable.push([]);

//     for (let j = 0; j < 10; j++) {
//         let correctFactorX = i + 1;
//         let correctFactorY = j + 1;

//         multTable[i].push(
//             `${correctFactorX} x ${correctFactorY} = ${
//                 correctFactorX * correctFactorY
//             }`
//         );
//     }
// }

// console.log(multTable);

// Task #5
// const employeeName = prompt("Please enter your first name");
// const employeeSurname = prompt("Please enter your last name");
// const employeePosition = prompt("Please enter your job position");

// const userData = {
//     name: employeeName,
//     surname: employeeSurname,
//     jobPosition: employeePosition,
// };

// console.log(
//     `Привет, ${userData.name} ${userData.surname}. Как долго ты работаешь ${userData.jobPosition}?`
// );

// Task #6
// function isEmpty(obj) {
//     for (let key in obj) return false;
//     return true;
// }

// console.log(isEmpty({})); // true
// console.log(isEmpty({ name: "John" })); // false
