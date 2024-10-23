import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Academics from './Pages/Academics/Academics'
import Login from './Pages/Login/Login'
import Gallery from './Pages/Gallery/Gallery'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/authenticate' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
