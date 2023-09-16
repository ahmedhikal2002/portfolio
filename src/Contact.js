import React from 'react'
import"./Contact.css"
function Contact() {
    return (
        <div className="contact" >
            <div className="container">
                <h2><span>Dorp</span> Me A line</h2>
                <form className="form">
                    <input className="name" type="text" placeholder="Your Name" />
                    <input  className="email" type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Your Subject" />
                    <textarea placeholder="Your Message" />
                    <input type="submit" value="Send Message" />


                </form>


            </div>
        </div>
    );
}

export default Contact;
