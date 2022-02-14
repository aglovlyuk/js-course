"use strict";

// Task #1
function sumTwoSmallestNumbers(...numbers) {
    if (numbers.length < 2) {
        console.error("Too few arguments");
        return;
    }

    const sortedArr = numbers.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

// Task #2
const createCalculator = function (input) {
    let currentNum = input;

    return {
        sum: (num) => (currentNum += num),
        mult: (num) => (currentNum *= num),
        sub: (num) => (currentNum -= num),
        div: (num) => (currentNum /= num),
    };
};

const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
