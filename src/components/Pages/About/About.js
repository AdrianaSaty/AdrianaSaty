import React from 'react';
import { useTranslation } from 'react-i18next';
import adrianaProgramming from '../../../img/Adriana-programming.png';

import './About.css';


function About() {
    const { t } = useTranslation();

    return (
        <div className="about">
            <img className="animate-blur" src={adrianaProgramming} alt="adriana-programming"></img>
            <div className="about-text">
                <div>
                    <h3 className="mt-4 mb-0">{t('AboutTitle.0')}</h3>
                    <p className="mb-0" dangerouslySetInnerHTML={{ __html:  t('AboutDescription.0') }}  />
                </div>
                <div>
                    <h3 className="mt-1 mb-0">{t('AboutTitle.1')}</h3>
                    <p className="" dangerouslySetInnerHTML={{ __html:  t('AboutDescription.1') }}  />

                </div>
            </div>
        </div>
    )
}

export default About;