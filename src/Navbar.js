import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <h2 className="logo-item">Ultra Profile</h2>
                </div>
                <ul>
                    <li className="link-item"><Link to="/">Home</Link></li>
                    <li className="link-item"><Link to="#">Work</Link></li>
                    <li className="link-item"><Link to="#">Portfolio</Link></li>
                    <li className="link-item"><Link to="#">Profile</Link></li>
                    <li className="link-item"><Link to="#">Resume</Link></li>
                    <li className="link-item"><Link to="#">About</Link></li>
                    <li className="link-item"><Link to="/contact">Contact</Link></li>


                </ul>

            </div>
            
        </div>
    );
}

export default Navbar;
