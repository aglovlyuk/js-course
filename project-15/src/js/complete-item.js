export const completeItem = function (elem) {
    elem.addEventListener("change", (event) => {
        const targetElem = event.target;
        if (targetElem.type !== "checkbox") return;

        const albumItem = targetElem.closest(".list-group-item");
        const removeButton = albumItem.querySelector(".btn-remove");

        if (targetElem.checked) {
            albumItem.classList.add("text-decoration-line-through");
            removeButton.disabled = true;
            targetElem.disabled = true;
        }
    });
};
