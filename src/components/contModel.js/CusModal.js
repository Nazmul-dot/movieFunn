import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios'
import { img_500, unavailableLandscape, unavailable } from '../../config/config'
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: "50%",
        height: "10%",
        backgroundColor: "#39445a",
        border: "1px solid #282c34",
        borderRadius: 10,
        color: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 3),
        display: 'flex',
        justifyContent: 'center',


    },
    port: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    lends: {

    }
}));

const CusModal = ({ children, type, id }) => {
    const classes = useStyles();
    const [content, setContent] = useState('');
    const [video, setVideo] = useState();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fetchData = async () => {
        const result = await axios.get(
            `https://api.themoviedb.org/3/${type}/${id}?api_key=72f75a773ed8f6ecafa0d7ccc88e68f9&language=en-US`
        );
        // console.log(result)
        setContent(result.data);
        console.log(type, "=", result);
    };

    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=72f75a773ed8f6ecafa0d7ccc88e68f9&language=en-US`
        );
        console.log(data);
        setVideo(data.results[0]?.key);
    };

    useEffect(() => {
        fetchData();
        fetchVideo();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className='card_box card-body'
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
                    {
                        content ? (
                            <div className={`${classes.paper} align-items-center`}>
                                <div style={{ flex: 0.5 }} className='mt-3'>
                                    <Button component='a' href={content.homepage} target='_blank' variant='contained' fullWidth color='secondary' >Home Page</Button>
                                </div>
                            </div>
                        ) : (
                            <div className={`${classes.paper} align-items-center`}>
                                <div style={{ flex: 0.5 }} className='mt-3'>
                                    <p>
                                        this content not avilable
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    {/* <div className={`row border`}>
                        {
                            content ? (
                                <div className='col-md-6 h-100 border mt-3 pb-3 d-flex justify-content-center'>
                                    <img
                                        src={
                                            content.poster_path
                                                ? `${img_500}/${content.poster_path}`
                                                : unavailable
                                        }
                                        alt={content.name || content.title}
                                        className="ContentModal__portrait"
                                    />

                                </div>
                            ) : "pblm"
                        }

                        {
                            content && (
                                <div className='col-md-6 border d-flex flex-column justify-content-lg-around'>
                                    <div>
                                        <h2 className='text-center'>{content.name}({content.release_date})</h2>
                                        <h6 className='text-center'>{content.tagline}</h6>
                                    </div>
                                    <div className='border w-75 h-25 mx-auto'
                                        style={{
                                            scrollbarWidth: 'none',
                                            overflowY: 'scroll',
                                        }}
                                    >
                                        <p>
                                            {content.overview}
                                        </p>
                                    </div>

                                    <div className='w-75 mx-auto'>
                                        <Button component='a' href={content.homepage} target='_blank' variant='contained' fullWidth color='secondary' >Trailer</Button>
                                    </div>
                                </div>
                            )
                        }

                    </div> */}
                </Fade>
            </Modal>
        </>
    );
}


export default CusModal

{/* <img
                                    className='img-fluid w-75'
                                    src={content ? `${img_500}${content.poster_path}` : unavailable}
                                    alt="" /> */}
