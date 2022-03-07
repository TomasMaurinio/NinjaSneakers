import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './NavBar.css'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
//externo fontawesome
import CartWidget from '../CartWidget/CartWidget';

export default function ButtonAppBar() {

  return (
    <AppBar position="static">
      <Toolbar>
        <div className="Logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className="Lista-NavBar">
          <li><Link to="/"><Button color="inherit">Inicio</Button></Link></li>
          <div className='dropdown'>
            <li> <Link to="/products"> <Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Productos</Button> </Link>
              <div className='dropdown-content'>
                <Link to="/products/zapatillas">Zapatillas</Link>
                <Link to="/products/ojotas">Ojotas</Link>
              </div>
            </li>
          </div>
          <li><Link to="/aboutus"> <Button color="inherit">Sobre nosotros</Button></Link></li>
          <li><Link to="/contact"> <Button color="inherit">Contacto</Button></Link></li>
          <div className='cart-icon'>
            <li>
              <CartWidget />
            </li>
          </div>
        </ul>
      </Toolbar>
    </AppBar>
  );
}