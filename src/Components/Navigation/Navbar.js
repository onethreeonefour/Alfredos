import React from 'react'

function Navbar() {
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'><h1>Alfredo's</h1></div>
            <div className='navbar__item'><a href="#about">About Us</a></div>
            <div className='navbar__item'><a href="#contact">Contact</a></div>  
        </header>
    )
}

export default Navbar

