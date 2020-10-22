import React, { useEffect, useRef } from 'react';
import Portrait from "../../Images/Hero/alfredos.webp"
import Menu from "../Menu/MenuPage";
import About from '../About/About';
import Contact from '../Contact/ContactPage'


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function LandingPage() {
    
    const contactRef = useRef('');
    const menuRef = useRef('');
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.call-to-action-anim', {
            scrollTrigger: {
                trigger: '.call-to-action-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1, y: -50, stagger: 0.4
        });

    }, [])

    return (
        <div>
            <div className="hero-container">
                <div className='hero-grid'>
                    <div>
                        <h1 className="call-to-action-anim">Alfredo's</h1>
                        <h2 className="call-to-action-anim">From Rome to Sydney - Authentic Italian Cuisine</h2>
                        <div className="call-to-action call-to-action-anim">
                            <button className='cta-main' onClick={() => scrollToRef(menuRef)}>Our Menu</button>
                            <button className='cta-secondary'  onClick={() => scrollToRef(contactRef)}>Booking</button>
                        </div>
                    </div>
                    <div>
                        <img src={Portrait} alt='alfredos' className="call-to-action-anim"></img>
                    </div>
                </div>
            </div>
            <div className="menu-container" ref={menuRef}>
                <Menu />
            </div>
            <div className="about-container" id="about">
                <About />
            </div>
            <div className="contact-container" ref={contactRef} id="contact">
                <Contact />
            </div>
        </div>
    )
}

export default LandingPage
