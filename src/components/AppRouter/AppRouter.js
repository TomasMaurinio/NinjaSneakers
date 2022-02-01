import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutUsPage from '../../Pages/AboutUsPage/AboutUsPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import HomePage from '../../Pages/HomePage/HomePage';
import ItemDetailPage from '../../Pages/ItemDetailPage/ItemDetailPage';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ButtonAppBar from "../NavBar/NavBar"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/:category' element={<ItemDetailContainer />} />
        <Route path='/ItemDetailPage/:id' element={<ItemDetailPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}