import { useEffect, useState } from "react";

import axios from "../helpers/axios";

const ImagesList = () => {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/list", {
                params: {
                    page: page,
                    limit: 10,
                },
            })
            .then((nextImages) => {
                setImages((prevImages) => [...prevImages, ...nextImages]);
                setLoading(false);
            });
    }, [page]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const handleMoreImage = () => {
        setPage(page + 1);
    };

    return (
        <>
            <ul className="list">
                {images.map(({ id, download_url }) => (
                    <li className="list__item" key={id}>
                        <img className="list__img" src={download_url} alt="" />
                    </li>
                ))}
            </ul>

            <button onClick={handleMoreImage} className="btn-primary">
                {isLoading ? "Loading..." : "Load More"}
            </button>
        </>
    );
};

export default ImagesList;
