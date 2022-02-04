import React from 'react';
import ButtonAppBar from "../components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import HomePage from '../Pages/HomePage/HomePage';
import ItemDetailPage from '../Pages/ItemDetailPage/ItemDetailPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Footer from '../components/footer/Footer';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/:category' element={<ItemListContainer />} />
        <Route path='/ItemDetailPage/:id' element={<ItemDetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}