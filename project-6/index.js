"use strict";

// Task #1
const sumTo = (num) => (num === 1 ? num : num + sumTo(num - 1));

console.log(sumTo(4)); // 10
console.log(sumTo(3)); // 6

// Task #2
const findShort = (str) =>
    str.split(" ").sort((a, b) => a.length - b.length)[0];

const sentance = "Lorem ipsum dolor sit amet";

console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is
