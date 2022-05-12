export const deleteItem = function (elem) {
    elem.addEventListener("click", (event) => {
        const isRemoveButton = event.target.classList.contains("btn-remove");

        if (isRemoveButton) {
            const albumItem = event.target.closest(".list-group-item");

            albumItem.remove();
        }
    });
};
