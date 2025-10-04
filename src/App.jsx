import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllProducts from './pages/AllProducts';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    {/* <Home /> */}
    <AllProducts />
    <Footer />
    </>
    
  )
}

export default App
