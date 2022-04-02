import storage from "./storage.js";
import isValidDateFormat from "./date.js";

const getPostStorage = storage.get("post");

if (getPostStorage) {
    console.log("from local");
    console.log(getPostStorage);
} else {
    console.log("from server");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
            storage.set("post", data);
        })
        .catch((error) => console.error(error));
}

// test remove method
//storage.remove("data");

console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false
