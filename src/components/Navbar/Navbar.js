import React from 'react';
import { Link } from 'react-router-dom';
import('./Navbar.css');

function Navbar() {

    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/freelance">Freelance</Link></li>
                <li><Link to="/background">Background</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;