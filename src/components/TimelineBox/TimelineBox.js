import React from 'react';
import dropdown from '../../img/dropdown.png';
// import ironhackFriends from '../../img/ironhackFriends.jpg';

import './TimelineBox.css';

function TimelineBox(props) {
    return (
        <div className="timeline">
            <span className="timeline-icon"></span>
            <span className="year">{props.timelineYear}</span>
            <div className="timeline-content pb-1">
                <div className="background-div-img">
                    <img src={props.img} alt={props.img} className="background-img" />
                </div>
                <h3 className="title">{props.timelineTitle}</h3>
                <span className="post">{props.timelinePost}</span>
                <p className="description" dangerouslySetInnerHTML={{ __html:  props.timelineDescription }} />

                <div className="show-only-hover">
                    {props.timelineExtra}
                </div>
                <img className="dropdown" src={dropdown} alt="dropdown" />
            </div>
        </div>
    )
}

export default TimelineBox;
