import React, { useEffect } from 'react';
import Indoor from '../../Images/About/indoors.webp'
import Reserve from '../../Images/About/reserve.webp'
import Toast from '../../Images/About/toast.webp'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function About() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.about-anim', {
            scrollTrigger: {
                trigger: '.about-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1, x: 70, stagger: 0.4
        });

    }, [])
    
    return (
        <div>
            <h1 className="heading-text">About Us</h1>
            <div className="about-grid">
                <div className="about-grid-text">
                    <h2>70 Years Of History</h2>
                    <hr />
                    <p>Alfredo's has it's root back to it's mother country of Italy.
                    Chef Giovanni has been working with traditional italian cuisine for his whole life.
                        <br /><br />
                        Traditional Italian cuisine is our speciality and with the taste of Rome to Sydney siders.
                    </p>
                </div>
                <div className="about-grid-image-container about-anim">
                    <img src={Indoor} alt="indoor"></img>
                </div>
            </div>
            <div className="about-grid">
                <div className="about-grid-image-container about-anim">
                    <img src={Reserve} alt="indoor" id="about-image-2"></img>
                </div>
                <div className="about-grid-text" id="about-text-2">
                    <h2>Indoor Dining</h2>
                    <hr />
                    <p>Our restaurant is proud to bring a taste of Italy to Sydney.
                    Our chief interior designer Mariette Rossi has made our restaurant a dining experience that cannot be matched in Sydney.
                    <br /><br />
                    Our seating capacity is at 100 person capacity with family sized tables available.
                    </p>
                </div>

            </div>
            <div className="about-grid">
                <div className="about-grid-text">
                    <h2>Reservations and Functions</h2>
                    <hr />
                    <p>Alfredo's has an online reservation that makes your special lunch or dinner one click away.
                        <br /><br />
                        Special occasions can be booked for multiple tables and can be enquired with out contact form.
                        <br /><br />
                        Why not make a good day even better? Booking our restaurant for a private party is perfectly possible - Please send us an enquiry.
                    </p>
                </div>
                <div className="about-grid-image-container about-anim">
                    <img src={Toast} alt="indoor"></img>
                </div>
            </div>
        </div>
    )
}

export default About
