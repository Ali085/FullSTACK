import React from 'react'
import './index.scss'
function Register() {
    return (
        <section className='register'>
            <div className='registerDiv'>
                <div>
                     <h2>
                    Register now and get a discount 50% discount until 1 January
                </h2>
                <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                <button>REGISTER NOW</button>
                </div>
               
            </div>
            <div className='SearchCourse'>
                <div className='searchRight'>
                     <h2>Search for your course</h2>
                <input type="text" placeholder='Course Name' />
                <input type="text" placeholder='Catagory' />
                <input type="text"  placeholder='Degree'/>
                <button>SEARCH COURSE</button>
                </div>
               
            </div>

        </section>
    )
}

export default Register