import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"

import React from 'react'
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>

    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout

