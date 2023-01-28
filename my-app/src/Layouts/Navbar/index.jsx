import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
function Navbar() {
    return (
        <nav>
            <div className="navDiv">
                <div className='navLogo'>
                    <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="logo" />
                    <h2>COURSE</h2>
                </div>
                <div className='navList'>
                    <ul>
                       <Link to={"/"}><li>HOME</li></Link> 
                       <Link to={"/add"}><li>ADD</li></Link>       
                        <li>COURSES</li>
                        <li>ELEMENTS</li>
                        <li>NEWS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div className='navNumber'>
                    <i className="fa-solid fa-phone"></i>
                    <h3>+43 4566 7788 2457</h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar