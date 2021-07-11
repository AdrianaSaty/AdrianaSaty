import React from 'react';
import dropdown from '../../img/dropdown.png';
// import ironhackFriends from '../../img/ironhackFriends.jpg';

import './TimelineBox.css';

function TimelineBox(props) {
    const { timelineYear, img, timelineTitle, timelinePost, timelineDuration, timelineDescription, secoundTimelinePost, secoundTimelineDuration, secoundTimelineDescription } = props;
    return (
        <div className="timeline">
            <span className="timeline-icon"></span>
            <span className="year">{timelineYear}</span>
            <div className="timeline-content pb-1">
                <div className="background-div-img">
                    <img src={img} alt={img} className="background-img" />
                </div>
                {secoundTimelinePost ?
                    <div>
                        <h3 className="title">{timelineTitle}</h3>
                        <span className="post">{secoundTimelinePost}</span>
                        <span className="duration">{secoundTimelineDuration}</span>
                        <p className="description" dangerouslySetInnerHTML={{ __html: secoundTimelineDescription }} />
                        <br />
                    </div>
                    : 
                    <h3 className="title">{timelineTitle}</h3>
                }
                <span className="post">{timelinePost}</span>
                <span className="duration">{timelineDuration}</span>
                <p className="description" dangerouslySetInnerHTML={{ __html: timelineDescription }} />
                <br></br>


                <div className="show-only-hover">
                    {props.timelineExtra}
                </div>
                <img className="dropdown" src={dropdown} alt="dropdown" />
            </div>
        </div>
    )
}

export default TimelineBox;
