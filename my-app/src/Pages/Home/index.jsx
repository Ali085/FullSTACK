import React from 'react'
import { Helmet } from 'react-helmet'
import Courses from '../../Components/Courses'
import Events from '../../Components/Events'
import Header from '../../Components/Header'
import Register from '../../Components/Register'
import Services from '../../Components/Services'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'

function Home() {
  return (
    <>

    <Helmet>
        <title>Home</title>
    </Helmet>
    <Navbar/>
    <Header/>
    <Courses/>
    <Register/>
    <Services/>
    <Events/>
    <Footer/>
    </>
  )
}

export default Home