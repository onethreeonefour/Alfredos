import React from 'react'
import Phone from '../../Images/phone.webp'

function ContactPage() {
    return (
        <div>
            <h1 className="heading-text">Contact Us</h1>
            <div className="form-grid">
                <div className="form-detail">
                    <img src={Phone} alt="phone-us"></img>
                    <h2>Contact Number</h2>
                    <h4>(02) 4444 8451</h4>
                    <h2>Our Address</h2>
                    <h4>28 George St, Sydney 2000</h4>
                    <div className="form-detail-trading-hours">
                        <p>Mon-Fri: 12PM - 9PM</p>
                        <p>Sat-Sun: 10AM - 11PM</p>
                    </div>
                </div>
                <div className="form-input">
                    <h2>Make An Enquiry</h2>
                    <div>
                        <label>Name</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Enquiry</label>
                        <textarea></textarea>
                    </div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
