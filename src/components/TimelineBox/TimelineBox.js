import React from 'react';
import('./TimelineBox.css');

function TimelineBox(props) {
    let timelineDescription = props.timelineDescription
    return (
        <div class="timeline">
        <span class="timeline-icon"></span>
        <span class="year">{ props.timelineYear }</span>
        <div class="timeline-content">
            <div class="backgound-img">
                <img src={ props.img } alt={ props.img } />
            </div>
            <h3 class="title">{ props.timelineTitle }</h3>
            <span class="post">{ props.timelinePost }</span>
            <p class="description" dangerouslySetInnerHTML= {{ __html: timelineDescription }}/>

        </div>
    </div>
    )
}

export default TimelineBox;
