import React from 'react';
// import cerejeira from '../../img/Cerejeira.jpg';
import selfie from '../../img/Adriana.png';
import('./Header.css');


function Header() {

    return (
        <div className="header">
            <div className="txt-header">
                <h1 className="pb-4">
                    {/* Hey! <br/> */}
                    Adriana Saty<br/>
                    {/* Frontend Developer <br/>  */}
                </h1>
                <h2>
                    Desenvolvedora <br/>
                    Frontend <br/>
                </h2>
            </div>
            <div>
                <img src={selfie} alt="cerejeira" className="img-header"></img>
            </div>
        </div>
    )
}

export default Header;