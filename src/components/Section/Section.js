import React from 'react';
import('./Section.scss');

function Section({ title, description }) {

    return (
        <div className="section">
            <h1 className="text-center pt-4"> {title}</h1> <br />
            <p>
                {description}
            </p>
        </div>
    )
}

export default Section;