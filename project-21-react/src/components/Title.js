import "./Title.css";

const Title = ({ name, type = "bold" }) => {
    return (
        <h1 className="main-ttl" style={{ fontWeight: type }}>
            {name}
        </h1>
    );
};

export default Title;
