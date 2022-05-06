$(function () {
    const form = $(".figure-form");
    const { "select-figure": selectFigure, "color-range": colorRange } =
        form[0];
    const figureCanvas = $("#figure");

    const figuresStyles = {
        circle: {
            width: "250px",
            height: "250px",
            borderRadius: "125px",
        },

        rectangle: {
            width: "250px",
            height: "180px",
            borderRadius: "5px",
        },

        square: {
            width: "250px",
            height: "250px",
            borderRadius: "0",
        },
    };

    const createFigure = (figure, styles, animDuration = 400) => {
        figure.animate(styles, animDuration, function () {
            $(this).addClass("created");
        });
    };

    createFigure(figureCanvas, figuresStyles[selectFigure.value], 0);
    figureCanvas.css("background-color", colorRange.value);

    $(colorRange).on("input", function () {
        figureCanvas.css("background-color", this.value);
    });

    $(selectFigure).on("change", function () {
        createFigure(figureCanvas, figuresStyles[this.value]);
    });
});
