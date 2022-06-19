import "./Title.css";

type TitleProps = {
    name: string;
    type: 'bold' | 'normal'
};

const Title = ({ name, type = "bold" }: TitleProps) => {
    return (
        <h1 className="main-ttl" style={{ fontWeight: type }}>
            {name}
        </h1>
    );
};

export default Title;
