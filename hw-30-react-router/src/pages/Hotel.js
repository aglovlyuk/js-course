import { useParams } from "react-router-dom";

const Hotel = () => {
    const params = useParams();

    return <h2>Hotel page: {params.hotelId}</h2>;
};

export default Hotel;
