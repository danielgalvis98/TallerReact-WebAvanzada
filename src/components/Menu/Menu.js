import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

import AccountCircle from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const menuId = 'primary-search-account-menu';


  

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <Link to="/" >
          <Typography className={classes.title} variant="h6"  noWrap>
             Gestión de Usuarios 
            
          </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
        
          <Link to="/" >
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
            > 
              <AccountCircle />
            </IconButton>
            </Link>

       
          </div>
         
         
        </Toolbar>
      </AppBar>
      <br></br>
     
    </div>
  );
}
