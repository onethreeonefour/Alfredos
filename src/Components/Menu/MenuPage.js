import React, { useEffect } from 'react';
import { menuItems } from './MenuData';


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


function MenuPage() {

    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.card-anim', {
            scrollTrigger: {
                trigger: '.card-anim',
                toggleActions: "restart none none reverse",
            }, autoAlpha: 0, duration: 1, y: 70, stagger: 0.065
        });

    }, [])

    const renderCards = menuItems.map((data, index) => {
        return <div key={index} className="menu-card">
            <div>
                <p className="menu-card-number card-anim">{data.id}</p>
                <h2 className="card-anim">{data.title}</h2>
                <p className="card-anim">{data.info}</p>
                <br />
                <hr />
                <br />
                <p className="menu-card-price card-anim">${data.price}</p>
            </div>
            <div className="menu-card-image-container">
                <img src={data.img} alt="avatar" className="menu-card-image card-anim"></img>
            </div>
        </div>
    })


    return (
        <div >
            <h1 className="heading-text">Menu</h1>
            <div className="menu-card-container">
                {renderCards}
            </div>
        </div>
    )
}

export default MenuPage
