import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import axios from "axios";
import {
    unavailableLandscape,
} from "../../config/config";
import "./ContentModal.css";

import YouTubeIcon from "@material-ui/icons/YouTube";
import Carousel from "../Carousel/Carousel";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: '90%',
        height: '80%',
        backgroundColor: '#39445a',
        border: '1px solid #282c34',
        borderRadius: 10,
        color: 'white',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 3),
    }
}));


const ContentModal = ({ children, mediaType, id, poster }) => {

    const classes = useStyles();
    // setting the state for the modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //setting initial state for content data and video
    const [content, setContent] = useState();
    const [video, setVideo] = useState();

    //variables relating to movie poster images
    const posterImage = "https://www.themoviedb.org/t/p/w94_and_h141_bestv2' + poster";
    const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

    //getting the movie data from the API
    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=5a89cc49b8ba1aac42aba5e9e0f14705&language=en-US`
        );
        setContent(data);
    };

    // getting the trailer info from the API
    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=5a89cc49b8ba1aac42aba5e9e0f14705&language=en-US`
        );
        setVideo(data.results[0]?.key);
    };

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, []);


    return (
        <>
            <div
                className="media"
                style={{ cursor: "pointer" }}
                color="inherit"
                onClick={handleOpen}
            >
                {children}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {content && (
                        <div className={classes.paper}>
                            <div className="ContentModal">
                                <img
                                    src={
                                        content.poster_path
                                            ? `${posterImage}/${content.poster_path}`
                                            : unavailable
                                    }
                                    alt={content.name || content.title}
                                    className="ContentModal__portrait"
                                />
                                <img
                                    src={
                                        content.backdrop_path
                                            ? `${posterImage}/${content.backdrop_path}`
                                            : unavailableLandscape
                                    }
                                    alt={content.name || content.title}
                                    className="ContentModal__landscape"
                                />
                                <div className="ContentModal__about">
                                    <span className="ContentModal__title">
                                        {content.name || content.title} (
                                        {(
                                            content.first_air_date ||
                                            content.release_date ||
                                            "-----"
                                        ).substring(0, 4)}
                                        )
                                    </span>
                                    {content.tagline && (
                                        <i className="tagline">{content.tagline}</i>
                                    )}

                                    <span className="ContentModal__description">
                                        {content.overview}
                                    </span>

                                    <div>
                                        <Carousel id={id} media_type={mediaType} />
                                    </div>

                                    <Button
                                        variant="contained"
                                        startIcon={<YouTubeIcon />}
                                        color="secondary"
                                        target="__blank"
                                        href={`https://www.youtube.com/watch?v=${video}`}
                                    >
                                        Watch the Trailer
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </Fade>
            </Modal>
        </>
    );
};
export default ContentModal;