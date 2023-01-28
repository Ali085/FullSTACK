import React from 'react'
import './index.scss'
function Header() {
    return (
        <section className='head'>
            <div className="headDiv">
                <div className="text">
                    <div className='prevnext'>
                         <p>PREV</p>
                    </div>
                    <div className="txt">
                        <h2>Get your <div> Education</div> today</h2>
                    </div>
                    <div className='prevnext'>
                         <p>NEXT</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="online">
                    <div>
                        <i className="fa-solid fa-earth-americas"></i>
                    </div>
                    <div>
                        <h3>Online Courses</h3>
                        <p>VIEW MORE</p>
                    </div>
                </div>
                <div className="online">

                    <div>
                        <i className="fa-solid fa-book"></i>
                    </div>
                    <div>
                        <h3>Our Library</h3>
                        <p>VIEW MORE</p>
                    </div>
                </div>
                <div className="online">

                    <div>
                        <i className="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <div>
                        <h3>Our Teachers</h3>
                        <p>VIEW MORE</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header