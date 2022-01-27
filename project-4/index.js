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
const array = [];

for (let i = 0; i < 10; i++) {
    array.push([]);

    for (let j = 0; j < 10; j++) {
        let correctI = i + 1;
        let correctJ = j + 1;

        array[i].push(`${correctI} x ${correctJ} = ${correctI * correctJ}`);
    }
}

console.log(array);

// Task #5
