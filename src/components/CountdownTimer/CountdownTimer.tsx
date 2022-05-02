import React, { useEffect, useState } from "react";
import './CountdownTimer.scss';

function CountdownTimer() {

    const [timeToReleaseDate, setTimeToReleaseDate] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0});

    function calculateTimeToReleaseDate() {
        const releaseDate = new Date('2022/05/08').getTime();
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
                <div className="time">
                    <div className="box">
                        <p id="day">{timeToReleaseDate?.days}</p>
                        <span className="text">Dias</span>
                    </div>
                    <div className="box">
                        <p id="hour">{timeToReleaseDate?.hours}</p>
                        <span className="text">Horas</span>
                    </div>
                    <div className="box">
                        <p id="min">{timeToReleaseDate?.minutes}</p>
                        <span className="text">Minutos</span>
                    </div>
                    <div className="box">
                        <p id="sec">{timeToReleaseDate?.seconds}</p>
                        <span className="text">Segundos</span>
                    </div>
                </div>
        </div>
    )
}

export default CountdownTimer;