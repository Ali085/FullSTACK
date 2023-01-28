import React from 'react'
import { Helmet } from 'react-helmet'
import SignupForm from '../../Components/AddSec'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'

function Add() {
  return (
    <>
    <Helmet>
        <title>Add</title>
    </Helmet>
    
    <Navbar/>
    <SignupForm/>
    <Footer/>

    </>
  )
}

export default Add