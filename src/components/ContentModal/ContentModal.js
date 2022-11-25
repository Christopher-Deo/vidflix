// ============ React components =================
import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player/lazy";
// ================= Axios ======================
import axios from "axios";
// ================= Material UI =================
// import { makeStyles } from '@mui/styles';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop'
import Fade from '@mui/material/Fade'
import { createTheme } from "@mui/material";
import { useTheme } from '@mui/private-theming';
import YouTubeIcon from '@mui/icons-material/YouTube';
// ================= src / components ===========
import Carousel from "../Carousel/Carousel";
import { unavailable, unavailableLandscape, img_500 } from "../../config/config";
// ===================== CSS =====================
import "./ContentModal.css";

// const styles = createTheme({
//     modal: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     paper: {
//         width: "90%",
//         height: "80%",
//         backgroundColor: "#39445a",
//         border: "1px solid #282c34",
//         borderRadius: 10,
//         color: "white",
//         boxShadow: theme.shadows[5],
//         padding: styles.spacing(1, 1, 3),
//     },
// });


/* const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};  */

export default function ContentModal({ children, media_type, id }) {
    // const classes = useTheme(styles);
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const endpoint = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=5a89cc49b8ba1aac42aba5e9e0f14705&language=en-US`;    
    console.log(endpoint);
    const fetchData = async () => {
        const { data } = await axios.get(
           endpoint                  
        );
        setContent(data);
        // console.log(data);
    };

    // const fetchVideo = async () => {
    //     const { data } = await axios.get(
    //         `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key5a89cc49b8ba1aac42aba5e9e0f14705&language=en-US`
    //     );

    //     setVideo(data.results[0]?.key);
    // };

    useEffect(() => {
        fetchData();
        // fetchVideo();
        // eslint-disable-next-line
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
            <Modal style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}      
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                // className={classes.modal}
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
                        <div style={{
                            width: "90%",
                            height: "80%",
                            backgroundColor: "#39445a",
                            border: "1px solid #282c34",
                            borderRadius: 10,
                            color: "white",
                            // boxShadow: styles.shadows[5],
                            // padding: styles.spacing(1, 1, 3),
                        }}> 
                            <div className="ContentModal">
                                <img
                                    src={
                                        content.poster_path
                                            ? `${img_500}/${content.poster_path}`
                                            : unavailable
                                    }
                                    alt={content.name || content.title}
                                    className="ContentModal__portrait"
                                />
                                <img
                                    src={
                                        content.backdrop_path
                                            ? `${img_500}/${content.backdrop_path}`
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
                                        <Carousel id={id} media_type={media_type} />
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
}