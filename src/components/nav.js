import React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));
  


const Nav = (props) => {
    const classes = useStyles();


    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        props.setName('');
    }
    
    return (
            <AppBar position="static">
            <Toolbar>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Logout</Button>
              <Link to="/" color="inherit" className="btn btn-primary" >Home</Link>
              <Link to="/login" color="inherit" className="btn btn-primary" onClick={logout}>Logout</Link>
            </Toolbar>
          </AppBar>
    );
};

export default Nav;