import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllProducts from './pages/AllProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all_products' element={<AllProducts />} />
        <Route path='*' element={<h1 className='h-screen text-center text-7xl font-bold m-16'>NOT FOUND</h1>} />

      </Routes>
      
      <Footer />
    </BrowserRouter>
    
    
  )
}

export default App
