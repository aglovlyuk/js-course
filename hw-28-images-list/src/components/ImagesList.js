import { useEffect, useState } from "react";

import axios from "../helpers/axios";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const ImagesList = () => {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios
            .get("/list", {
                params: {
                    page,
                    limit: 5,
                },
            })
            .then((nextImages) => {
                setImages((prevImages) => [...prevImages, ...nextImages]);
                setLoading(false);
            });
    }, [page]);

    const handleMoreImage = () => {
        setPage(page + 1);
    };

    const handleClickOpen = (item) => () => {
        setSelectedImage(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <ImageList sx={{ width: 500 }} cols={3} rowHeight={110}>
                {images.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            className="list__img"
                            src={item.download_url}
                            alt={item.author}
                            loading="lazy"
                            onClick={handleClickOpen(item)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    {selectedImage && (
                        <ul className="list__img-info">
                            <li>Author: {selectedImage.author}</li>
                            <li>Width: {selectedImage.width}</li>
                            <li>Height: {selectedImage.height}</li>
                        </ul>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <button onClick={handleMoreImage} className="btn-primary">
                {isLoading ? "Loading..." : "Load More"}
            </button>
        </>
    );
};

export default ImagesList;
