"use strict";

// Task #1
// let numFirst = +Math.random().toFixed(2);
// let numSecond = +Math.random().toFixed(3);
// let numThird = +Math.random().toFixed(4);
// console.log(numFirst, numSecond, numThird);

// Task #2
// for (let i = 0; i <= 10; i++) {
//     if (i % 2) continue;
//     console.log(i ** 2);
// }

// Task #3
// while (true) {
//     let userNum = prompt("Enter a number greater than 100");
//     if (userNum > 100 || userNum === null) break;
// }

// Task #4
// let average = 0,
//     userNum,
//     sum = 0,
//     i = 0;

// while (true) {
//     userNum = prompt("Enter a number");

//     if (userNum === null || userNum === "") {
//         console.log(`Quantity: ${i}; Sum: ${sum}; Average: ${average}`);
//         break;
//     } else if (!isNaN(userNum)) {
//         i++;
//         sum += +userNum;
//         average = sum / i;
//     }
// }

// Task #5
// let userNum = +prompt("Enter a number from 0 to 100");

// for (let i = 0; i < 100; i++) {
//     if (i === userNum) break;
//     console.log(i);
// }

// Task #6
// function randomRange(min, max) {
//     console.log(Math.random() * (max - min) + min);
// }

// randomRange(1, 5);

// Task #7
function pow(x, n) {
    let initialVal = x;

    for (let i = 0; i < n - 1; i++) {
        console.log((initialVal *= x));
    }
}

pow(5, 3);

// function pow(x, n) {
//     console.log(x ** n);
// }

// pow(5, 2);
