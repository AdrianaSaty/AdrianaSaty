import React from 'react';
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer';
import('./Background.css');

function Background() {

    return (
        <div className="background">
            <Navbar />
            <div>
            Background
            </div>
            <Footer />
        </div>
    )
}

export default Background;