const list = document.getElementById("list");
const form = document.forms.todo;
const errorMessage = form.querySelector(".error-message");
const { todoinput } = form;
const submitButton = form.querySelector(".todo-form__btn");

function isEmptyField(field) {
    return field.value.trim().length === 0;
}

const createElements = (text) => {
    let listItem = document.createElement("li");
    listItem.classList.add("todo-list__item");
    listItem.innerHTML = text;

    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("type", "button");
    removeBtn.classList.add("btn-remove");
    removeBtn.textContent = "X";
    listItem.append(removeBtn);

    list.append(listItem);
};

list.addEventListener("click", (event) => {
    const isRemoveButton = event.target.className === "btn-remove";

    if (isRemoveButton) {
        const albumItem = event.target.closest(".todo-list__item");
        albumItem.remove();
    }
});

todoinput.oninput = () => {
    if (!isEmptyField(todoinput)) {
        todoinput.classList.remove("error");
        errorMessage.textContent = "";
    }
};

form.onsubmit = (event) => {
    event.preventDefault();

    if (isEmptyField(todoinput)) {
        todoinput.classList.add("error");
        errorMessage.textContent = "Field cannot be empty";

        return;
    }

    createElements(todoinput.value);

    todoinput.value = "";
};
