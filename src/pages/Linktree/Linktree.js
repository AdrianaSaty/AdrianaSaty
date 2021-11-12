import React from 'react';
// import { useTranslation } from 'react-i18next';
import './Linktree.scss';
import alemanha from '../../img/logos/alemanha.png';
import instagram from '../../img/svgs/instagram.svg';


function Linktree() {
    // const { t } = useTranslation();

    return (
        <div className="linktree">
            <div className="container">
                <div>
                    <div>
                        <div className="session">
                            <center>
                            <img className="img-avatar" alt="profile" src="https://cdn.beacons.ai/profile_pictures/beacons/thefoodietakesflight.png?t=1618484982831"/>
                            <h1>
                                Adriana Saty | Desenvolvedora de Software
                            </h1>
                            <img src={alemanha} alt="alemanha"></img>
                            <img className="logo" src={instagram} alt="alemanha"></img>
                            <div>

                            </div>
                            </center>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Linktree;