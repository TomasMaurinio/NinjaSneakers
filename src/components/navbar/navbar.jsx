import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './NavBar.css'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

export default function ButtonAppBar() {

  const [categories] = useState([
    {
      name: 'zapatillas',
      id: 1,
      category: 1,
    },
    {
      name: 'ojotas',
      id: 2,
      category: 2,
    },])

  return (
    <AppBar position="static">
      <Toolbar>
        <div className="Logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="Lista-NavBar">
          <li><Link to="/"><Button color="inherit">Inicio</Button></Link></li>
          <div className='dropdown'>
            <li> <Link to='/products' style={{ textDecoration: 'none', color: 'white' }}> <Button color="inherit">Productos</Button> </Link>
              <div className='dropdown-content'>   {categories.map((category) => {
                return <Link to={`/category/${category.id}`} style={{ textDecoration: 'none', color: 'white' }} > <Button className='boton-dropdown' color="inherit">
                  {category.name}</Button></Link>
              })} </div>
            </li>
          </div>
          <li><Link to="/aboutus"> <Button color="inherit">Sobre nosotros</Button></Link></li>
          <li><Link to="/contact"> <Button color="inherit">Contacto</Button></Link></li>
        </ul>
      </Toolbar>
    </AppBar>
  );
}