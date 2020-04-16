import React from 'react';
import { useTranslation } from 'react-i18next';

import './About.css';

function About() {
    const { t } = useTranslation();

    return (
        <div className="about">
            <div>
                {t('About.0')} 
            </div>
        </div>
    )
}

export default About;