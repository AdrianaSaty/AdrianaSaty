import React from 'react';
import TimelineBox from '../../TimelineBox/TimelineBox'
import ironhack from '../../../img/logo-ironhack.png';
import frankfurt from '../../../img/logo-frankfurt.jpg';
import ufpr from '../../../img/logo-ufpr.png';
import santander from '../../../img/logo-santander.png';
import accenture from '../../../img/logo-accenture.png';
import renault from '../../../img/logo-renault.png';

import ironhackFriends from '../../../img/ironhackFriends.jpg';

import { useTranslation } from 'react-i18next';
import './Background.css';

const academicTimelineImages = [
    ironhack,
    frankfurt,
    ufpr,
];

const academicExtraContent = [
    <img src={ironhackFriends} alt={ironhackFriends} className="extra-content" />,

]

const professionalTimelineImages = [
    ironhack,
    santander,
    accenture,
    renault
]

const professionalExtraContent = [
    <></> ,
    <iframe width="120%" src="https://www.youtube.com/embed/SSx52ZIkXwA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

]

function Background() {
    const { t } = useTranslation();

    return (
        <div className="background">
            <h1 class="pt-5 pb-5">{t('AcademicBackground.0')}</h1>
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            {academicTimelineImages.map((valueImg, index) => {
                                return <TimelineBox 
                                            timelineYear={t('AcademicTimelineYear.' + index )} 
                                            img={valueImg}
                                            timelineTitle={t('AcademicTimelineTitle.' + index )}
                                            timelineDescription={t('AcademicTimelineDescription.' + index )}
                                            timelineExtra={academicExtraContent[index]}
                                        />
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="pt-5 pb-5">{t('ProfessionalBackground.0')}</h1>
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">

                            {professionalTimelineImages.map((valueImg, index) => {
                                return <TimelineBox 
                                            timelineYear={t('ProfessionalTimelineYear.' + index )} 
                                            img={valueImg}
                                            timelineTitle={t('ProfessionalTimelineTitle.' + index )}
                                            timelinePost={t('ProfessionalTimelinePost.' + index )}
                                            timelineDescription={t('ProfessionalTimelineDescription.' + index )}
                                            timelineExtra={professionalExtraContent[index]}

                                        />
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background;