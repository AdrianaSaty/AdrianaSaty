import React from 'react';
import './Accordion.scss';
import arrow from '../../img/svgs/arrow.svg';

function expand() {
    const text = document.getElementById('text');
    const rotArrow = document.getElementById('rotArrow');

     document.getElementById('accordion')?.addEventListener('click', function () {
         if (text?.classList.contains('collapsed')) {
             rotArrow?.classList.add('arrow-expanded')
             text?.classList.remove('collapsed');
             text?.classList.add('expanded');
         }
         else {
             rotArrow?.classList.remove('arrow-expanded')
             text?.classList.remove('expanded');
             text?.classList.add('collapsed');
         }
     })
    
    const text2 = document.getElementById('text-2');
    const rotArrow2 = document.getElementById('rotArrow-2');
    
    document.getElementById('accordion-2')?.addEventListener('click', function () {
        if (text2?.classList.contains('collapsed')) {
            rotArrow2?.classList.add('arrow-expanded')
            text2?.classList.remove('collapsed');
            text2?.classList.add('expanded');
        }
        else {
            rotArrow2?.classList.remove('arrow-expanded')
            text2?.classList.remove('expanded');
            text2?.classList.add('collapsed');
        }
    })

    const text3 = document.getElementById('text-3');
    const rotArrow3 = document.getElementById('rotArrow-3');
    
    document.getElementById('accordion-3')?.addEventListener('click', function () {
        if (text3?.classList.contains('collapsed')) {
            rotArrow3?.classList.add('arrow-expanded')
            text3?.classList.remove('collapsed');
            text3?.classList.add('expanded');
        }
        else {
            rotArrow3?.classList.remove('arrow-expanded')
            text3?.classList.remove('expanded');
            text3?.classList.add('collapsed');
        }
    })

}

function Accordion() {
    return (
        <div className='container'>
            <div className='btn'>
                <button id='accordion' onClick={expand}>Teste
                    <img src={arrow} id='rotArrow' className="arrow"></img>
                </button>
                <div className='collapsed' id='text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia, inventore, magnam quaerat suscipit modi labore, eum quo est iste molestias! Nobis sunt asperiores blanditiis at porro voluptatem maxime itaque.</p>
                </div>
            </div>
            <div className='btn'>
                <button id='accordion-2' onClick={expand}>Teste
                    <img src={arrow} id='rotArrow-2' className="arrow"></img>
                </button>
                <div className='collapsed' id='text-2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia, inventore, magnam quaerat suscipit modi labore, eum quo est iste molestias! Nobis sunt asperiores blanditiis at porro voluptatem maxime itaque.</p>
                </div>
            </div>
            <div className='btn'>
                <button id='accordion-3' onClick={expand}>Teste
                    <img src={arrow} id='rotArrow-3' className="arrow"></img>
                </button>
                <div className='collapsed' id='text-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia, inventore, magnam quaerat suscipit modi labore, eum quo est iste molestias! Nobis sunt asperiores blanditiis at porro voluptatem maxime itaque.</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion;