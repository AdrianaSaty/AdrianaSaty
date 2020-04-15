import React from 'react';
import ironhack from '../../../img/logo-ironhack.png';
import frankfurt from '../../../img/logo-frankfurt.jpg';
import ufpr from '../../../img/logo-ufpr.png';
import santander from '../../../img/logo-santander.png';
import accenture from '../../../img/logo-accenture.png';
import renault from '../../../img/logo-renault.png';
import { useTranslation } from 'react-i18next';

import './Background.css';

function Background() {
    const { t } = useTranslation();

    return (
        <div className="background">
            <h1 class="pt-5 pb-5">{t('AcademicBackground.1')}</h1>
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">

                            <div class="timeline">
                                <span class="timeline-icon"></span>
                                <span class="year">{t('AcademicTimelineYear.1')}</span>
                                <div class="timeline-content">
                                    <div class="backgound-img">
                                        <img src={ironhack} alt="ironhack" />
                                    </div>
                                    <h3 class="title">{t('AcademicTimelineTitle.1')}</h3>
                                    <p class="description">
                                        {t('AcademicTimelineDescription.1')}
                                    </p>
                                </div>
                            </div>

                            <div class="timeline">
                                <span class="timeline-icon"></span>
                                <span class="year">{t('AcademicTimelineYear.2')}</span>
                                <div class="timeline-content">
                                    <div class="backgound-img">
                                        <img src={frankfurt} alt="frankfurt" />
                                    </div>
                                    <h3 class="title">{t('AcademicTimelineTitle.2')}</h3>
                                    <p class="description">
                                        {t('AcademicTimelineDescription.2')}
                                    </p>
                                </div>
                            </div>

                            <div class="timeline">
                                <span class="timeline-icon"></span>
                                <span class="year">{t('AcademicTimelineYear.3')}</span>
                                <div class="timeline-content">
                                    <div class="backgound-img">
                                        <img src={ufpr} alt="ufpr" />
                                    </div>
                                    <h3 class="title">{t('AcademicTimelineTitle.3')}</h3>
                                    <p class="description">
                                        {t('AcademicTimelineDescription.3')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="pt-5 pb-5">Professional Background</h1>
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">

                            <div class="timeline">
                                <span class="timeline-icon"></span>
                                <span class="year">{t('ProfessionalTimelineYear.1')}</span>
                                <div class="timeline-content">
                                    <div class="backgound-img">
                                        <img src={ironhack} alt="ironhack" />
                                    </div>
                                    <h3 class="title">{t('ProfessionalTimelineTitle.1')}</h3>
                                    <span class="post">{t('ProfessionalTimelinePost.1')}</span>
                                    <p class="description">
                                        {t('ProfessionalTimelineDescription.1')}
                                    </p>
                                </div>
                            </div>

                            <div class="timeline">
                                <span class="timeline-icon"></span>
                                <span class="year">{t('ProfessionalTimelineYear.2')}</span>
                                <div class="timeline-content">
                                    <div class="backgound-img">
                                        <img src={santander} alt="ironhack" />
                                    </div>
                                    <h3 class="title">{t('ProfessionalTimelineTitle.2')}</h3>
                                    <span class="post">{t('ProfessionalTimelinePost.2')}</span>
                                    <p class="description">
                                        {t('ProfessionalTimelineDescription.2')}
                                    </p>
                                </div>
                            </div>

                            <div class="timeline">
                                <span class="timeline-icon"></span>
                                <span class="year">{t('ProfessionalTimelineYear.3')}</span>
                                <div class="timeline-content">
                                    <div class="backgound-img">
                                        <img src={accenture} alt="accenture" />
                                    </div>
                                    <h3 class="title">{t('ProfessionalTimelineTitle.3')}</h3>
                                    <span class="post">{t('ProfessionalTimelinePost.3')}</span>
                                    <p class="description">
                                        {t('ProfessionalTimelineDescription.3')}
                                    </p>
                                </div>
                            </div>

                            <div class="timeline">
                                <span class="timeline-icon"></span>
                                <span class="year">{t('ProfessionalTimelineYear.4')}</span>
                                <div class="timeline-content">
                                    <div class="backgound-img">
                                        <img src={renault} alt="renault" />
                                    </div>
                                    <h3 class="title">{t('ProfessionalTimelineTitle.4')}</h3>
                                    <span class="post">{t('ProfessionalTimelinePost.4')}</span>
                                    <p class="description">
                                        {t('ProfessionalTimelineDescription.4')}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background;