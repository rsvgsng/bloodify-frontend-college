import React from 'react'
import Navbar from '../components/Navbar'
import HeroSeciton from '../components/HomeComponents/HeroSection'
import SectionTwo from '../components/HomeComponents/SectionTwo'
import SectionThree from '../components/HomeComponents/SectionThree'
import { Outlet } from 'react-router-dom'

function HomePage() {
    return (
        <React.Fragment>
            <HeroSeciton />
            <SectionTwo />
            <SectionThree />
        </React.Fragment>
    )
}

export default HomePage