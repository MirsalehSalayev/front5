import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Sections/Footer'
import Navbar from '../../Sections/Navbar'
function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout