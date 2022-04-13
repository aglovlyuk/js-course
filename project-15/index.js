const list = document.getElementById("list");
const form = document.forms.todo;
const errorMessage = form.querySelector(".invalid-feedback");
const { todoinput } = form;
const submitButton = form.querySelector("button[type=submit]");
const template = document.getElementById("list-item");

function isEmptyField(field) {
    return field.value.trim().length === 0;
}

const createElements = (text) => {
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

    list.append(listItem);
};

list.addEventListener("click", (event) => {
    const isRemoveButton = event.target.classList.contains("btn-remove");

    if (isRemoveButton) {
        const albumItem = event.target.closest(".list-group-item");

        albumItem.remove();
    }
});

todoinput.oninput = () => {
    if (!isEmptyField(todoinput)) {
        todoinput.classList.remove("is-invalid");
    }
};

form.onsubmit = (event) => {
    event.preventDefault();

    if (isEmptyField(todoinput)) {
        todoinput.classList.add("is-invalid");

        return;
    }

    createElements(todoinput.value);

    todoinput.value = "";
};

list.addEventListener("click", (event) => {
    const targetElem = event.target;
    const albumItem = targetElem.closest(".list-group-item");
    const removeButton = albumItem.querySelector(".btn-remove");

    if (targetElem.checked) {
        albumItem.classList.add("text-decoration-line-through");
        removeButton.disabled = true;
        targetElem.disabled = true;
    }
});
