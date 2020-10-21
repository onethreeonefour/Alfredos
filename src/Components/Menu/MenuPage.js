import React from 'react'
import { menuItems } from './MenuData'

function MenuPage() {

    const renderCards = menuItems.map((data, index) => {
        return <div key={index} className="menu-card">
            <div>
                <p className="menu-card-number">{data.id}</p>
                <h2>{data.title}</h2>
                <p>{data.info}</p>
                <br />
                <hr />
                <br />
                <p className="menu-card-price">${data.price}</p>
            </div>
            <div>
                <img src={data.img} alt="avatar" className="menu-card-image"></img>
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
