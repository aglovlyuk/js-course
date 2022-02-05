"use strict";

//Task #1: Smallest numbers
// function sumTwoSmallestNumbers(arr) {
//     const sortedArr = arr.sort((a, b) => a - b);

//     return sortedArr[0] + sortedArr[1];
// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
// console.log(sumTwoSmallestNumbers([10, 343, 345, 3, 13, 22]));
// console.log(sumTwoSmallestNumbers([2, 3, 4, 0, 21, -1]));

//Task #2: Reverse string
// const reverseString = function (str) {
//     return str.split("").reverse().join("");
// };

// console.log(reverseString("world"));
// console.log(reverseString("word"));

//Task #3: Factorial
// const factorial = function (num) {
//     if (num === 1) {
//         return num;
//     } else {
//         return num * factorial(num - 1);
//     }
// };

// const factorial = (num) => (num === 1 ? num : num * factorial(num - 1));

// console.log(factorial(3));
// console.log(factorial(4));

//Task #4: Calculator
const checkTypes = function (firstNumber, secondNumber, result) {
    if (
        !isNaN(+firstNumber) &&
        !isNaN(+secondNumber) &&
        !isNaN(+result) &&
        +firstNumber < 1000000 &&
        +firstNumber > 0 &&
        +secondNumber < 1000000 &&
        +secondNumber > 0 &&
        +result < 1000000 &&
        +result > 0
    ) {
        return true;
    } else {
        return console.error(`You input wrong argument.`);
    }
};

const calc = function calc(firstNumber, secondNumber, operation, result) {
    if (checkTypes(firstNumber, secondNumber, result)) {
        const mathOperation = eval(firstNumber + operation + secondNumber);
        const finalResult = +parseFloat(mathOperation).toFixed(5);

        return finalResult === +result ? true : false;
    }
    return "Check error";
};

console.log(calc("1", "2", "+", "3")); // true
console.log(calc(1, "2", "-", 4)); // false
console.log(calc(0.1, 0.2, "+", 0.3)); // true
