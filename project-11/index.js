"use strict";

const myTestPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("done");
        reject(new Error("Error message"));
    }, 5000);
});

myTestPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.error(error))
    .finally(() => console.log("Promise was finished!"));

// async / await
async function examplePromise() {
    try {
        const result = await myTestPromise;
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Promise was finished!");
    }
}

examplePromise();
