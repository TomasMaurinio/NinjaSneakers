import React from 'react';
import ButtonAppBar from "../components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import HomePage from '../Pages/HomePage/HomePage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import Footer from '../components/footer/Footer';
import { CartProvider } from '../context/CartContext';
import ItemListPage from '../Pages/ItemListPage/ItemListPage';
import ItemDetailPage from '../Pages/ItemDetailPage/ItemDetailPage';
import ItemCategoryPage from '../Pages/ItemCategoryPage/ItemCategoryPage';
import CartPage from '../Pages/CartPage/CartPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ButtonAppBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ItemListPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/product/:id' element={<ItemDetailPage/>} />
          <Route path='/products/:category' element={<ItemCategoryPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}