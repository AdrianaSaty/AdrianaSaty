import React from 'react';
import { useTranslation } from 'react-i18next';

import './About.css';


function About() {
    const { t } = useTranslation();

    return (
        <div className="about">
            <div>
                {t('About.0')}
                <h2>About me</h2>
                <p>
                    Hello. How's it going over there? :)
                    I'm happy you are visiting my website, thank you!
                    Well, let me introduce myself haha
                    I'm Adriana Saty! I made Electrical Engineering and after painful classes of C++, 
                    I was sure programming was not for me.
                    When I graduated, I desired to work with something that I could use my love for technology 
                    and creativity to make my path a meaningful one. 
                    And guess what? 
                    I found myself in the programming world and I couldn't feel more engineer as I feel nowadays!
                    If you want to see better my background, you can go to Backgroud page!
                </p>
            </div>
            <div>
                <h2>About this website</h2>
                <p>
                    I started this project to learn how to make a website truly from scratch: 
                    buy a domain, create the layout, choose the technologies, 
                    develop everything, control version code, storage, evaluate SEO and performance, 
                    improve, improve, improve, and finally publish it!! 
                    What is being used in this project:
                        - Javascript (with React)
                        - HTML and CSS
                        - Github
                        - S3 and Cloudfront by Amazon Web Services (AWS)
                        - i18next library to translate content

                    Next steps:
                    I want to learn how to make deployment automation and learn more about improve site performance
                </p>
            </div>
        </div>
    )
}

export default About;