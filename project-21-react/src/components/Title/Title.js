import "./Title.css";
import PropTypes from "prop-types";

const Title = ({ name, type }) => {
    return (
        <h1 className="main-ttl" style={{ fontWeight: type }}>
            {name}
        </h1>
    );
};

Title.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["bold", "normal"]),
};

Title.defaultProps = {
    type: "bold",
};

export default Title;
