import React from 'react';
import('./Section.css');

function Section({ title, description }) {

    return (
        <div className="section">
            <h1 className="text-center pt-4"> {title}</h1> <br />
            <p>
                {description}
            </p>

            <div>
               
            </div>

        </div>

    )
}

export default Section;