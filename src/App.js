import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/HomePage/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Pages/Footer/Footer';
import Services from './Components/Pages/Services/Services'
import Products from './Components/Pages/Products/Products';
import SignUp from './Components/Pages/SignUp/SignUp';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products/>} />
      <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
