"use strict";

// Task #1
// const myBirthsDate = new Date("1987-03-20");
// const myBirthsDay = myBirthsDate.getDate();
// const myBirthsMonth = `0${myBirthsDate.getMonth() + 1}`.slice(-2);
// const myBirthsYear = myBirthsDate.getFullYear();

// console.log(`${myBirthsDay}.${myBirthsMonth}.${myBirthsYear}`);

// Task #2
const getDiffDays = function (firstDate, secondDate) {
    const startDate = new Date(firstDate);
    const endDate = new Date(secondDate);
    const MS_PER_DAY = 86400000;
    const isValidDate = (date) => new Date(date).toString() !== "Invalid Date";

    if (!isValidDate(startDate) || !isValidDate(endDate)) {
        return "Error: invalid date";
    } else if (startDate > endDate) {
        return "Error: your start date is later than end";
    } else {
        return (endDate - startDate) / MS_PER_DAY;
    }
};

console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

// Task #3
// const isWeekend = function (date) {
//     const dayOfWeek = new Date(date).getDay();

//     return dayOfWeek === 0 || dayOfWeek === 6;
// };

// console.log(isWeekend("2022-02-12")); // true
// console.log(isWeekend("2022-02-13")); // true
// console.log(isWeekend("2022-02-09")); // false

//Task #4
// const person = {
//     fullName: "Sherlock Holmes",
//     address: {
//         street: "Baker Street",
//         city: "London",
//         house: "221b",
//     },
// };

// const personsJSON = JSON.stringify(person);
// const personObj = JSON.parse(personsJSON);
// let {
//     fullName,
//     address: { street, city, house },
// } = person;

// console.log(personsJSON);
// console.log(personObj);
// console.log(fullName, street, city, house);
