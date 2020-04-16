import React from 'react';
import dropdown from '../../img/dropdown.png';
// import ironhackFriends from '../../img/ironhackFriends.jpg';

import './TimelineBox.css';

function TimelineBox(props) {
    return (
        <div class="timeline">
            <span class="timeline-icon"></span>
            <span class="year">{props.timelineYear}</span>
            <div class="timeline-content">
                <div class="background-div-img">
                    <img src={props.img} alt={props.img} className="background-img" />
                </div>
                
                <h3 class="title">{props.timelineTitle}</h3>
                <span class="post">{props.timelinePost}</span>
                <p class="description" dangerouslySetInnerHTML={{ __html:  props.timelineDescription }} />
                <div className="onlyHover">
                    {props.timelineExtra}
                </div>
                <img className="dropdown" src={dropdown} alt="dropdown" />
            </div>
        </div>
    )
}

export default TimelineBox;
