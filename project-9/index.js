"use strict";

// Task #1
class Employee {
    static vacationDays = 18;

    constructor(firstName, lastName, age, jobPosition, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobPosition = jobPosition;
        this.salary = salary;
    }

    yearSalary() {
        return this.salary * 12;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const employee1 = new Employee(
    "John",
    "Jackson",
    "27",
    "React developer",
    2500
);
const employee2 = new Employee("Kate", "Smith", "29", "Vue JS developer", 2250);

console.log(employee1, employee2);
console.log(employee2.yearSalary());
console.log(employee2.fullName);
console.log(Employee.vacationDays);
