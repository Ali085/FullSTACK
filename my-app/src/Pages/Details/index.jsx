import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Detail from '../../infoSec'
import { Helmet } from 'react-helmet'
import Footer from '../../Layouts/Footer'

function Details() {
    return (
        <>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <Navbar />
            <Detail />
            <Footer/>
        </>
    )
}

export default Details