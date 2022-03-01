import React from 'react';
import selfie from '../../img/Adriana.png';
import { useTranslation } from 'react-i18next';
import './Header.scss';

function Header() {
    const { t } = useTranslation();
    return (
        <header>
            <div className="container m-0">
                <div className="stars-small"></div>
                <div className="stars-big"></div>
                <div className="row">
                    <div className="col-4 txt-header">
                        <h1 className="pb-1 text-left">
                            Adriana Saty<br />
                        </h1>
                        <h2 className="text-left">
                            {t('Frontend.0')}<br />
                            {t('Developer.0')}<br />
                        </h2>
                    </div>
                    <div className="col-8 img-header">
                        <img src={selfie} alt="selfie" className="d-block"></img>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;