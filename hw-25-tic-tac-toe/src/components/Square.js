import PropTypes from "prop-types";

const Square = ({ winSquare, value, onClick }) => {
    return (
        <button
            className={`square ${winSquare ? "is-win" : ""}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

Square.propTypes = {
    value: PropTypes.oneOf(["X", "O", null]).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Square;
