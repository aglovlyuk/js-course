const template = document.getElementById("list-item");

export const createElements = (text, parentElem) => {
    // structure in html-template
    let listItem = template.content.cloneNode(true);
    let textContainer = listItem.querySelector(".list-item-txt");
    textContainer.textContent = text;

    // create structure by JS
    // listItem.classList.add(
    //     "list-group-item",
    //     "d-flex",
    //     "justify-content-between",
    //     "align-items-center"
    // );
    // listItem.innerHTML = text;

    // let removeBtn = document.createElement("button");
    // removeBtn.setAttribute("type", "button");
    // removeBtn.classList.add("btn-remove", "btn", "btn-danger");
    // removeBtn.innerHTML = '<i class="bi bi-trash"></i>';
    // listItem.append(removeBtn);

    // let checkbox = document.createElement("input");
    // checkbox.setAttribute("type", "checkbox");
    // listItem.prepend(checkbox);
    parentElem.append(listItem);
};
