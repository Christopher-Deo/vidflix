// ============ React components =================
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
// ================= Axios ======================
import axios from "axios";
// ================= Material UI =================
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import YouTubeIcon from "@material-ui/icons/YouTube";
// ================= src / components ===========
import Carousel from "../Carousel/Carousel";
import { unavailable, unavailableLandscape } from "../../config/config";
// ===================== CSS =====================



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


function ChildModal(props) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${props.mediaType}/${props.id}?api_key=5a89cc49b8ba1aac42aba5e9e0f14705&language=en-US`
        );
        setContent(data);
        // console.log(data);
    };

    const fetchVideo = async (props) => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${props.mediaType}/${props.id}/videos?api_key=$5a89cc49b8ba1aac42aba5e9e0f14705&language=en-US`
        );
        setVideo(data.results[0]?.key);
    };
    useEffect(() => {
        fetchData();
        fetchVideo();
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <Button onClick={handleOpen}>Open Child Modal</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: '80%', height: '70%' }}>
                    {/* ============ React Video Player ================= */}
                    <div className="trailer">
                        <ReactPlayer className="react-player"
                            url={`https://www.youtube.com/watch?v={props.video}`}
                            width="100%" height="100%" />
                    </div>

                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </>
    );
}

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    {/* ================ primary modal ================= */}


                    {/* ================== end primary modal content ================= */}         
                    <ChildModal />
                </Box>
            </Modal>
        </div>
    );
}