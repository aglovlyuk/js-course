"use strict";

const isWeekend = function (date) {
    const dayOfWeek = new Date(date).getDay();

    return dayOfWeek === 0 || dayOfWeek === 6;
};

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
    constructor(firstName, lastName, age, birthDayDate, jobPosition, salary) {
        super(firstName, lastName, age, birthDayDate);
        this.jobPosition = jobPosition;
        this._salary = salary;
    }

    getYearSalary() {
        return this._salary * 12;
    }

    celebrate() {
        const birthdayThisYear = new Date(this.birthDayDate).setFullYear(
            new Date().getFullYear()
        );

        return isWeekend(birthdayThisYear)
            ? super.celebrate()
            : "Happy Birthday, but I need to work";
    }

    get salary() {
        return this._salary;
    }
}

const person = new Person("Alex", "Smith", "35", "1987-03-20");
const employee = new Employee(
    "Kate",
    "Smith",
    "32",
    "1989-12-06",
    "Vue JS developer",
    1000
);

console.log(person.celebrate());
console.log(employee.celebrate());
