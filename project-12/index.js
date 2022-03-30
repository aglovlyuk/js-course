"use strict";

// then/catch method
fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        const employeesOneCompany = data.filter(
            ({ company: { name } }) => name.toLowerCase() === "johns group"
        );

        console.log(employeesOneCompany);
    })
    .catch((error) => console.error(error));

// async/await method
async function getUsers() {
    try {
        const response = await fetch(
            "http://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw response;
        }

        const data = await response.json();
        const employeesOneCompany = data.filter(
            (item) => item.company.name.toLowerCase() === "johns group"
        );

        console.log(employeesOneCompany);
    } catch (responseError) {
        console.error(error);
    }
}

getUsers();
