import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
    },
});

const MainNav = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    useEffect(() => {
        if (value === 0) {
            history.push('/')
        }
        else if (value === 1) {
            history.push('/movie')
        }
        else if (value === 2) {
            history.push('/tv')
        }
        else {
            history.push('/search')
        }
    }, [value])
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Tanding" icon={<WhatshotIcon />} style={{ color: '#fff' }} />
            <BottomNavigationAction label="Movie" icon={<MovieIcon />} style={{ color: '#fff' }} />
            <BottomNavigationAction label="Tv Serise" icon={<TvIcon />} style={{ color: '#fff' }} />
            <BottomNavigationAction label="Search" icon={<SearchIcon />} style={{ color: '#fff' }} />
        </BottomNavigation>
    );
}

export default MainNav
