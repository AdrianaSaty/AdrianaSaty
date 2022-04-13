import React, { useEffect, useState } from "react";
import './CountdownTimer.scss';

function CountdownTimer() {

    const [timeToReleaseDate, setTimeToReleaseDate] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0});


    function calculateTimeToReleaseDate() {
        const releaseDate = new Date('2022/05/14').getTime();
        const nowDate = new Date().getTime();
        const milissecoundsToReleaseDate = Math.abs(releaseDate - nowDate);

        if(milissecoundsToReleaseDate > 0) {
             const days = Math.floor(milissecoundsToReleaseDate / (1000 * 60 * 60 * 24));
             const hours = Math.floor((milissecoundsToReleaseDate / (1000 * 60 * 60)) % 24)
             const minutes = Math.floor((milissecoundsToReleaseDate / 1000 / 60) % 60)
             const seconds = Math.floor((milissecoundsToReleaseDate / 1000) % 60)
            return { days, hours, minutes, seconds};
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0}
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeToReleaseDate(calculateTimeToReleaseDate());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="bar">
            <div className="box">
                <div className="time">
                    <div>
                        <p id="day">{timeToReleaseDate?.days}</p>
                        <span>Dias</span>
                    </div>
                    <div>
                        <p id="hour">{timeToReleaseDate?.hours}</p>
                        <span>Horas</span>
                    </div>
                    <div>
                        <p id="min">{timeToReleaseDate?.minutes}</p>
                        <span>Minutos</span>
                    </div>
                    <div>
                        <p id="sec">{timeToReleaseDate?.seconds}</p>
                        <span>Segundos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
setInterval(CountdownTimer, 1000);

export default CountdownTimer;