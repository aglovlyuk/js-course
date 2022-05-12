import "./scss/app.scss";

import { createElements } from "./js/create-item";
import { isEmptyField } from "./js/validate-form";
import { completeItem } from "./js/complete-item";
import { deleteItem } from "./js/delete-item";

const list = document.getElementById("list");
const form = document.forms.todo;
const { todoinput } = form;

completeItem(list);
deleteItem(list);

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

    createElements(todoinput.value, list);
    form.reset();
};
