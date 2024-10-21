import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Courses from '../../Components/Courses/Courses'
import Accreditations from '../../Components/Accreditations/Accreditation'
import Aim from '../../Components/Aim/Aim'
import Participation from '../../Components/Participation/Participation'

const Home = () => {
    return (
        <div>
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
        </div>
    )
}

export default Home
