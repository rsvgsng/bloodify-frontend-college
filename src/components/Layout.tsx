import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Drawer from './SideDrawer'

function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <Drawer />
            <Outlet />
        </React.Fragment>
    )
}

export default Layout