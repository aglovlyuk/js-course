"use strict";

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        //resolve("done");
        reject(new Error("Error message"));
    }, 5000);
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.error(error))
    .finally(() => console.log("Promise was finished!"));

// async / await
async function examplePromise() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Promise was finished!");
    }
}

examplePromise();
