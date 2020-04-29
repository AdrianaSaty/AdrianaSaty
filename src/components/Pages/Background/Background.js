import React from 'react';
import TimelineBox from '../../TimelineBox/TimelineBox'
import ironhack from '../../../img/logos/logo-ironhack.png';
import frankfurt from '../../../img/logos/logo-frankfurt.jpg';
import ufpr from '../../../img/logos/logo-ufpr.png';
import santander from '../../../img/logos/logo-santander.png';
import accenture from '../../../img/logos/logo-accenture.png';
import renault from '../../../img/logos/logo-renault.png';
import './Background.css';

import ironhackFriends from '../../../img/ironhackFriends.jpg';

import { useTranslation } from 'react-i18next';


const professionalTimelineImages = [
    ironhack,
    santander,
    accenture,
    renault
]


const academicTimelineImages = [
    ironhack,
    frankfurt,
    ufpr,
];

const academicExtraContent = [
    <img src={ironhackFriends} alt={ironhackFriends} className="extra-content" />,
    <iframe className="extra-content" alt='goethe-award' title="goethe-award" src="https://www.youtube.com/embed/hSKdSNHuVX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    <iframe className="extra-content" alt='projeto-lux-ufpr' title="projeto-lux-ufpr"  src="https://www.youtube.com/embed/BNRzBmdoSHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
]

const professionalExtraContent = [
    <></> ,
    <iframe className="extra-content" src="https://www.youtube.com/embed/SSx52ZIkXwA"  title ="sim-video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,

]

function Background() {
    const { t } = useTranslation();

    return (
        <div className="background">
            <h1 className="pt-5 pb-5">{t('AcademicBackground.0')}</h1>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">
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

            <h1 className="pt-5 pb-5">{t('ProfessionalBackground.0')}</h1>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">

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