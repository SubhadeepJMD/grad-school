import React from 'react';

import {Link} from "react-router-dom";

export default function Header() {
    const fontSize = {
        fontSize: "20px"
    }
    return (
        <>
            <header className="main-header clearfix" role="header">
                <div className="logo">
                    <Link to="#" style={fontSize}><em style={fontSize}>Lakshyam</em> Coaching</Link>
                </div>
                <Link to="#menu" className="menu-link"><i className="fa fa-bars"></i></Link>
                <nav id="menu" className="main-nav" role="navigation">
                    <ul className="main-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li className="has-submenu"><Link to="#">Free Tutorial</Link>
                            <ul className="sub-menu">
                                <li><Link to="#">Free Notes</Link></li>
                                <li><Link to="#">Free Videos</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="Lakshyam Backend Design.pdf" target="_blank">Login</Link></li>

                    </ul>
                </nav>
            </header>
        </>
    )
}
