"use strict";

// Task #1
// const myBirthsDate = new Date("1987-03-20");
// const myBirthsDay = myBirthsDate.getDate();
// const myBirthsMonth = ("0" + (myBirthsDate.getMonth() + 1)).slice(-2);
// const myBirthsYear = myBirthsDate.getFullYear();

// console.log(`${myBirthsDay}.${myBirthsMonth}.${myBirthsYear}`);

// Task #2
const getDiffDays = function (firstDate, secondDate) {
    const startDate = Date.parse(firstDate);
    const endDate = Date.parse(secondDate);

    if (startDate > endDate) {
        return "Error: your start date is later than end";
    } else if (isNaN(startDate) || isNaN(endDate)) {
        return "Error: invalid date";
    } else {
        return (endDate - startDate) / 86400000;
    }
};

console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end
