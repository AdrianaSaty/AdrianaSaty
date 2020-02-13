import React from 'react';
// import cerejeira from '../../img/Cerejeira.jpg';
import selfie from '../../img/Adriana.png';
import('./Header.css');


function Header() {

    return (
        <div className="header"> 
        <div className="container m-0">
            <div className="row">
                <div className="col-4 txt-header">
                    <h1 className="pb-1 text-left">
                        Adriana Saty<br />
                    </h1>
                    <h2 className="text-left">
                        Desenvolvedora <br />
                        Frontend <br />
                    </h2>
                </div>
                <div className="col-8 img-header">
                    <img src={selfie} alt="cerejeira" className="d-block"></img>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header;