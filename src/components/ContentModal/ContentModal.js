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




const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: "90%",
        height: "80%",
        backgroundColor: "#39445a",
        border: "1px solid #282c34",
        borderRadius: 10,
        color: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 3),
    },
}));




export default function ContentModal({ children, media_type, id }) {
  return (
      <>
          {/* <div
              className="media"
              style={{ cursor: "pointer" }}
              color="inherit"
              onClick={handleOpen}
          >
              {children}
          </div> */}
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
  )
}


