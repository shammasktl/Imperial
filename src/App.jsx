import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Banner/Banner'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="app">
      <Banner />
    </div>
    <Footer />
    </>
  )
}

export default App
