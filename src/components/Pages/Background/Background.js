import React, { useEffect}  from 'react';
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
    <iframe className="extra-content" alt='projeto-lux-ufpr' title="projeto-lux-ufpr" src="https://www.youtube.com/embed/BNRzBmdoSHw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
]

const professionalExtraContent = [
    <iframe className="extra-content" src="https://www.youtube.com/embed/SSx52ZIkXwA" title="sim-video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    <></>,
    <></>,
    <img src={renaultIntership} alt={renaultIntership} className="extra-content" />,
]

const technologies = [
    {
        tableTitel: "Front End",
        tableDescription: "Javascript, Typescript, Vue.js, React,  CSS, SASS,  HTML5, SEO,  Bootstrap, Material-UI"
    },
    {
        tableTitel: "Back End",
        tableDescription: "Node"
    },
    {
        tableTitel: "Data Stores",
        tableDescription: "MongoBD"
    },
    {
        tableTitel: "Tools",
        tableDescription: "Git, Jira,  Agile (Scrum)"
    }
]

function Background() {
    const TimelineBox = React.lazy(() => import('../../TimelineBox/TimelineBox'));

    const { t } = useTranslation();
    window.scrollTo(0, 0);

    return (
        <div className="background">
            <div className="container pb-3">
                <h1 className="pt-5 pb-3">{t('TechnologiesBackground.0')}</h1>
                <div>
                    {technologies.map((technology, index) => {
                        return <div key={index}>
                            <div className="table m-0" >
                                <div className="table-title-col table-title d-flex justify-content-center align-items-center">
                                    <p className="m-0">{technology.tableTitel}</p>
                                </div>
                                <div className="table-description-col table-description">
                                    {technology.tableDescription}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className="container pb-5">
                <h1 className="pt-5 pb-3">{t('AcademicBackground.0')}</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">
                            {academicTimelineImages.map((valueImg, index) => {
                                return <TimelineBox
                                    timelineYear={t('AcademicTimelineYear.' + index)}
                                    img={valueImg}
                                    timelineTitle={t('AcademicTimelineTitle.' + index)}
                                    timelineDescription={t('AcademicTimelineDescription.' + index)}
                                    timelineExtra={academicExtraContent[index]}
                                    key={index}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-5">
                <h1 className="pt-5 pb-3">{t('ProfessionalBackground.0')}</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline">

                            {professionalTimelineImages.map((valueImg, index) => {
                                return <TimelineBox
                                    timelineYear={t('ProfessionalTimelineYear.' + index)}
                                    img={valueImg}
                                    timelineTitle={t('ProfessionalTimelineTitle.' + index)}
                                    timelinePost={t('ProfessionalTimelinePost.' + index)}
                                    timelineDuration={t('ProfessionalTimelineDuration.' + index)}
                                    timelineDescription={t('ProfessionalTimelineDescription.' + index)}
                                    secoundTimelinePost={t('SecoundProfessionalTimelinePost.' + index)}
                                    secoundTimelineDuration={t('SecoundProfessionalTimelineDuration.' + index)}
                                    secoundTimelineDescription={t('SecoundProfessionalTimelineDescription.' + index)}
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