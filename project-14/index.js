const list = document.getElementById("albums");

list.addEventListener("click", (event) => {
    const isRemoveButton = event.target.className === "btn-remove";

    if (isRemoveButton) {
        const albumItem = event.target.closest(".album_title");
        albumItem.remove();
    }
});

fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(function (item) {
            let listItem = document.createElement("li");
            listItem.classList.add("album_title");
            listItem.innerHTML = item.title;

            let removeBtn = document.createElement("button");
            removeBtn.setAttribute("type", "button");
            removeBtn.classList.add("btn-remove");
            removeBtn.textContent = "X";
            listItem.append(removeBtn);

            list.append(listItem);
        });
    })
    .catch((error) => console.error(error));
