import React, { useEffect, useState } from 'react';
import '../reloj/Reloj.css'

const Reloj: React.FC = () => {

    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }
    useEffect(() => {

        setInterval(tick, 1000);

        return () => {
            clearInterval(1000);
        }
    }, [time]);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let minutosArreglados="0";
    let horasArregladas="0";
    if(minutes<10)
    {
        minutosArreglados = "0" +minutes;
    }
    else{
        minutosArreglados = minutes.toString();
    }
    if(hours<10)
    {
        horasArregladas = "0" + hours.toString();
    }
    else
    {
        horasArregladas = hours.toString();
    }

    return (
        <div className="clock">
            <p className="relojDeLaAplicacion">{horasArregladas}:{minutosArreglados}</p>
        </div>
    )
}

export default Reloj;
