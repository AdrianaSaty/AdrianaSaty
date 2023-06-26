import React, { useState } from 'react';
import './Accordion.scss';
import arrow from '../../img/svgs/arrow.svg';

interface Props {
    title: string,
    description: string,
    ad_encoding: string,
    ad_linktree: string
}
function Accordion(props: Props) {
    const { title, description, ad_encoding, ad_linktree } = props;

    const [isSelected, setSelected] = useState(false)

    return (
        <div className='wrapper'>
            <div className='accordion'>
                <div className="accordion">
                    <div className="item">
                        <div className="title" onClick={() => setSelected(!isSelected)}>
                            <div>{title}</div>
                            <span>
                                {isSelected ? <img src={arrow} alt="arrow icon" className='arrow-expanded'></img> : <img src={arrow} alt="arrow icon" className='arrow-collapsed'></img>}
                            </span>
                        </div>
                        {isSelected && <div className='content'>
                            <a href={description}  target="_blank">
                                <img src={ad_encoding} />
                            </a>
                            <img src={ad_linktree} width="1" height="1" alt="" />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion;