import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import {Drawer, CssBaseline, AppBar, Toolbar, Grid, Divider, IconButton, Typography, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./Drawer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),

    justifyContent: 'flex-end',
  },
}));


export default function DrawerComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickChange = () => {
    localStorage.removeItem('isLoggedIn');
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}

          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
       
        <div className="UserDrawerData">
          <Grid container direction="row" justify="center" alignItems="center" spacing={2} >
            <Grid item>
              <FontAwesomeIcon icon={faUser} size="4x" />
            </Grid>
            <Grid item>
            <Typography className="title">
              Ricardo Martinez
            </Typography>
            <Typography variant="body2" className="Mail">
              ricardo@somemail.com
            </Typography>
              
            </Grid>
          </Grid>
        </div>
        <Divider />
        <Button color="secondary" onClick={handleClickChange} >
          LogOut
        </Button>
      </Drawer>
      
    </div>
  );
  
}
