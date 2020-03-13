import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import('./Navbar.css');

function Navbar() {

    const { t } = useTranslation();

    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">{t('NavBarAbout.0')}</Link></li>
                {/* <li><Link to="/freelance">{t('NavBarFreelance.0')}</Link></li> */}
                <li><Link to="/background">{t('NavBarBackground.0')}</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;