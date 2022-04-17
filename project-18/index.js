$(function () {
    const form = $(".figure-form");
    const { "select-figure": selectFigure, "color-range": colorRange } =
        form[0];
    const figure = $("#figure");

    figure
        .addClass(selectFigure.value)
        .css("background-color", colorRange.value);

    form.on("change", (event) => {
        const targetElem = event.target;

        if (targetElem.type === "color") {
            figure.css("background-color", targetElem.value);
        } else if (targetElem.tagName === "SELECT") {
            figure.attr("class", selectFigure.value);
        }
    });
});
