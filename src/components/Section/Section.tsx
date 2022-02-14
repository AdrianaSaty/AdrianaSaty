import React from 'react';
import './Section.scss';

interface Props {
    title: string,
    description: string
}

function Section(props: Props) {

    const { title, description } = props;

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