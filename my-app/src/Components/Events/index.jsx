import React from 'react'
import './index.scss'
function Events() {
    return (
        <section className='events'>
            <div className="eventsHead">
                <h2>Upcoming Events</h2>
            </div>
            <div className='allEvents'>
                <div className='eventCard'>
                    <div className='date'>
                        <h2>07</h2>
                        <p>January</p>
                    </div>
                    <div className='eventTXT'>
                        <h3>Student Festival</h3>
                        <h3>Grand Central Park</h3>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="FOTO" />
                    </div>
                </div>
                <div className='eventCard'>
                    <div className='date'>
                        <h2>07</h2>
                        <p>January</p>
                    </div>
                    <div className='eventTXT'>
                        <h3>Open day in the Univesrsity campus</h3>
                        <h3>Grand Central Park</h3>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/course/images/event_2.jpg" alt="FOTO" />
                    </div>
                </div>
                <div className='eventCard'>
                    <div className='date'>
                        <h2>07</h2>
                        <p>January</p>
                    </div>
                    <div className='eventTXT'>
                        <h3>Student Graduation Ceremony</h3>
                        <h3>Grand Central Park</h3>
                        <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                    </div>
                    <div>
                        <img src="https://preview.colorlib.com/theme/course/images/event_3.jpg" alt="FOTO" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events