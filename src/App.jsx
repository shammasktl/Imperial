import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
