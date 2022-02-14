"use strict";

// Task #1
const myBirthsDate = new Date("1987-03-20");
const myBirthsDay = myBirthsDate.getDate();
const myBirthsMonth = ("0" + (myBirthsDate.getMonth() + 1)).slice(-2);
const myBirthsYear = myBirthsDate.getFullYear();

console.log(`${myBirthsDay}.${myBirthsMonth}.${myBirthsYear}`);

// Task #2
