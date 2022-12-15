import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/HomePage/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Pages/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
