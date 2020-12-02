import React, { useEffect}  from 'react';
import TimelineBox from '../../TimelineBox/TimelineBox'
import ironhack from '../../../img/logos/logo-ironhack.png';
import frankfurt from '../../../img/logos/logo-frankfurt.jpg';
import ufpr from '../../../img/logos/logo-ufpr.png';
import santander from '../../../img/logos/logo-santander.png';
import accenture from '../../../img/logos/logo-accenture.png';
import renault from '../../../img/logos/logo-renault.png';
import ironhackFriends from '../../../img/ironhackFriends.jpg';
import renaultIntership from '../../../img/Renault.png';
import './Background.css';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga';

const professionalTimelineImages = [
    santander,
    ironhack,
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
    <iframe className="extra-content" alt='goethe-award' title="goethe-award" src="https://www.youtube.com/embed/hSKdSNHuVX4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    <iframe className="extra-content" alt='projeto-lux-ufpr' title="projeto-lux-ufpr"  src="https://www.youtube.com/embed/BNRzBmdoSHw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
]

const professionalExtraContent = [
    <iframe className="extra-content" src="https://www.youtube.com/embed/SSx52ZIkXwA"  title ="sim-video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    <></> ,
    <></> ,
    <img src={renaultIntership} alt={renaultIntership} className="extra-content" />,
]

function Background() {
    const { t } = useTranslation();
    window.scrollTo( 0, 0 );

    useEffect(() => {
        ReactGA.initialize('G-CT415D3JH9')
        ReactGA.pageview('background',window.location.pathname + window.location.search);
    });

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
                                            key={index}
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
                                            timelineDuration={t('ProfessionalTimelineDuration.' + index )}
                                            timelineDescription={t('ProfessionalTimelineDescription.' + index )}
                                            secoundTimelinePost={t('SecoundProfessionalTimelinePost.' + index )}
                                            secoundTimelineDuration={t('SecoundProfessionalTimelineDuration.' + index )}
                                            secoundTimelineDescription={t('SecoundProfessionalTimelineDescription.' + index )}
                                            timelineExtra={professionalExtraContent[index]}
                                            key={index}
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