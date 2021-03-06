"use strict";

// Task #1
// const searchString = function (originalStr, str) {
//     //return originalStr.toLowerCase().includes(str.toLowerCase()); // без учета регистра
//     return originalStr.includes(str); // с учетом регистра
// };

// console.log(searchString("Hello", "llo")); // true
// console.log(searchString("Hello", "www")); // false

// Task #2
// const capitalizeFirstLetter = function (str) {
//     return `${str[0].toUpperCase()}${str.slice(1)}`;
// };

// console.log(capitalizeFirstLetter("hello")); // Hello
// console.log(capitalizeFirstLetter("HELLO")); // HELLO
// console.log(capitalizeFirstLetter("hElLo")); // HElLo

// Task #3
// const truncate = function (str, maxlength) {
//     if (str.length > maxlength) return `${str.substr(0, maxlength)}...`;
//     return str;
// };

// console.log(truncate("Hello world", 5)); // Hello...
// console.log(truncate("Hello world", 25)); // Hello world

// Task #4
const students = [
    {
        name: "John Smith",
        marks: [10, 8, 6, 9, 8, 7],
    },
    {
        name: "John Doe",
        marks: [9, 8, 7, 6, 7],
    },
    {
        name: "Thomas Anderson",
        marks: [6, 7, 10, 8],
    },
    {
        name: "Jean-Baptiste Emanuel Zorg",
        marks: [10, 9, 8, 9],
    },
];

const getStudentsAverageMark = function (arr) {
    const newArr = arr.map((item) => {
        const sumMarks = item.marks.reduce((sum, current) => sum + current, 0);

        return {
            ...item,
            totalSumMarks: sumMarks,
            averageMark: sumMarks / item.marks.length,
        };
    });

    return newArr;
};

const calcStudentsAverageMark = function (arr) {
    return arr.reduce(
        (sum, item, i, arr) => (sum += item.totalSumMarks / arr.length),
        0
    );
};

console.log(getStudentsAverageMark(students));
console.log(calcStudentsAverageMark(getStudentsAverageMark(students)));

// Task #5
// const vehicles = [
//     { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//     { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//     { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//     { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//     { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//     { make: "Toyota", model: "Sequoia", type: "SUV", price: 45560 },
//     { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//     { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//     { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//     { make: "Ford", model: "Explorer", type: "SUV", price: 31660 },
// ];

// const getAveragePriceSuv = function (arr) {
//     return arr
//         .filter((item) => item.type.toLowerCase() === "suv")
//         .reduce((sum, amount, i, arr) => (sum += amount.price / arr.length), 0);
// };

// console.log(getAveragePriceSuv(vehicles));

// Task #6
// let arr = [10, 20, 3, 4, 0, 99, 97];
// let sorted = copySorted(arr);

// function copySorted(arr) {
//     return arr.map((item) => item).sort((a, b) => a - b);
// }

// console.log(arr); // [10, 20, 3, 4, 0, 99, 97]
// console.log(sorted); // [0, 3, 4, 10, 20, 97, 99]

// Task #7
// function getKeysCount(obj) {
//     return Object.keys(obj).length;
// }

// console.log(getKeysCount({ name: "John" })); // 1
// console.log(getKeysCount({ name: "John", age: 22 })); // 2
// console.log(getKeysCount({ name: "John", salary: null })); // 2
