const list = document.getElementById("albums");

fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(function (item) {
            let listItem = document.createElement("li");
            listItem.classList.add("album_title");
            listItem.innerHTML = item.title;

            list.append(listItem);
        });
    })
    .catch((error) => console.error(error));
