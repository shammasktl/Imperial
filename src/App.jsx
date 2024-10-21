import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Banner/Banner'
import Courses from './Components/Courses/Courses'
import Accreditations from './Components/Accreditations/Accreditation'
import Participation from './Components/Participation/Participation'
import Aim from './Components/Aim/Aim'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="app">
      <Banner />
    </div>
    <Courses />
    <div className="app">
      <Accreditations />
    </div>
    <div className="bg-[f8f8f8] py-8 px-8">
      <Aim />
      <Participation />
    </div>
    <Footer />
    </>
  )
}

export default App
