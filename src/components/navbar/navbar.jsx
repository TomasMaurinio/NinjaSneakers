import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
//css
import './NavBar.css'
import Logo from "../../assets/logo.png"

export default function ButtonAppBar() {
  return (
      <AppBar position="static">
        <Toolbar>
        <div className="Logo">
            <img src={Logo} alt="" />
          </div>
        <ul className="Lista-NavBar">
          <li>  <Button color="inherit">inicio</Button>         </li>
          <li>  <Button color="inherit">productos</Button>      </li>
          <li>  <Button color="inherit">sobre nosotros</Button> </li>
        </ul>
        </Toolbar>
      </AppBar>
  );
}