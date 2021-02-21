import React from 'react';
import { AppBar ,Toolbar,IconButton, Button, Typography, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
  }));
  
export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.navbar}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                News
            </Typography>
        
            </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
        </div>
    );
}
  