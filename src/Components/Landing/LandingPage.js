import React from 'react'
import Portrait from "../../Images/Hero/alfredos.webp"
import Menu from "../Menu/MenuPage";
import About from '../About/About';
import Contact from '../Contact/ContactPage'

function LandingPage() {
    return (
        <div>
            <div className="hero-container">
                <div className='hero-grid'>
                    <div>
                        <h1>Alfredo's</h1>
                        <h2>From Rome to Sydney - Authentic Italian Cuisine</h2>
                        <div className="call-to-action">
                            <button className='cta-main'>Our Menu</button>
                            <button className='cta-secondary'>Booking</button>
                        </div>
                    </div>
                    <div>
                        <img src={Portrait} alt='alfredos'></img>
                    </div>
                </div>
            </div>
            <div className="menu-container">
                <Menu />
            </div>
            <div className="about-container">
                <About />
            </div>
            <div className="contact-container">
                <Contact />
            </div>
        </div>
    )
}

export default LandingPage
