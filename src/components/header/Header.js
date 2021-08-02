import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    header_box: {
        backgroundColor: '#39445a',
        position: 'fixed',
        width: "100%",
        padding: '10px 0px',
        zIndex: 100,
        top: 0,
        boxShadow: "1px 5px 2px -2px rgba(0,0,0,0.29)",
        cursor: 'pointer'
    },
    h1: {

        [theme.breakpoints.down('md')]: {
            fontSize: '8vw',
            margin: '0px 5px'
        }
    }
}))
const Header = () => {
    const classes = useStyle()
    return (
        <>
            <div onClick={() => window.scroll(0, 0)} className={`${classes.header_box} d-flex justify-content-center`}>
                <h1 className={classes.h1}>🚂 Entertainment-Hub 🎥</h1>
            </div>
        </>
    )
}

export default Header
