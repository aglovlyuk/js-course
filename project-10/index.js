"use strict";

class Person {
    constructor(firstName, lastName, age, birthDayDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = birthDayDate;
    }

    celebrate() {
        return "Happy Birthday, let’s celebrate";
    }
}

class Employee extends Person {
    _salary = 1000;

    constructor(firstName, lastName, age, birthDayDate, jobPosition) {
        super(firstName, lastName, age, birthDayDate);
        this.jobPosition = jobPosition;
    }

    getYearSalary() {
        return this._salary * 12;
    }

    celebrate() {
        const currentYear = new Date().getFullYear();
        const monthOfBirth = new Date(this.birthDayDate).getMonth();
        const dateOfBirth = new Date(this.birthDayDate).getDate();

        const birthDayCurrentYear = new Date(
            currentYear,
            monthOfBirth,
            dateOfBirth
        ).getDay();

        return birthDayCurrentYear === 0 || birthDayCurrentYear === 6
            ? "Happy Birthday, let’s celebrate"
            : "Happy Birthday, but I need to work";
    }
}

const person = new Person("Alex", "Smith", "35", "1987-03-20");
const employee = new Employee(
    "Kate",
    "Smith",
    "32",
    "1989-12-06",
    "Vue JS developer"
);

console.log(person.celebrate());
console.log(employee.celebrate());
