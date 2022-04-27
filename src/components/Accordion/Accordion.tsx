import React, { useState } from 'react';
import './Accordion.scss';
import arrow from '../../img/svgs/arrow.svg';

interface Props {
    title: string,
    description: string
}
function Accordion(props: Props) {
    const { title, description } = props;

    const [isSelected, setSelected] = useState(false)

    return (
        <div className='wrapper'>
            <div className='accordion'>
                <div className="accordion">
                    <div className="item">
                        <div className="title" onClick={() => setSelected(!isSelected)}>
                            <div>{title}</div>
                            <span>
                                {isSelected ? <img src={arrow} className='arrow-expanded'></img> : <img src={arrow} className='arrow-collapsed'></img>}
                            </span>
                        </div>
                        {isSelected && <div>{description}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion;