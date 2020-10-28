import React, { useState, useEffect } from 'react';
import "./Fecha.css"


const Fecha: React.FC = () => {

    const [time, setTime] = useState(new Date());
    const [diasDeLaSemana] = useState([ "DOMINGO","LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"]);

    const [dia, setDia] = useState(time.getDate())
    const [mes, setMes] = useState(time.getMonth() + 1)
    const [anio, setAnio] = useState(time.getFullYear())
    let [diaEnLetras, setDiaEnLetras] = useState("indefinido")

    const tick = () => {
        setTime(new Date());
    }

    const asignarDia = () => {
        switch (time.getDay()) {
            case 0:
                setDiaEnLetras(diasDeLaSemana[0]);
                break;
            case 1:
                setDiaEnLetras(diasDeLaSemana[1]);
                break;
            case 2:
                setDiaEnLetras(diasDeLaSemana[2]);
                break;
            case 3:
                setDiaEnLetras(diasDeLaSemana[3]);
                break;
            case 4:
                setDiaEnLetras(diasDeLaSemana[4]);
                break;
            case 5:
                setDiaEnLetras(diasDeLaSemana[5]);
                break;
            case 6:
                setDiaEnLetras(diasDeLaSemana[6]);
                break;
        }
    }

    useEffect(() => {

        setInterval(tick, 1000);

        if(time.getDate() != dia){
            asignarDia()
        }

        return () => {
            clearInterval(1000);
        }
    }, [time]);

    useEffect(() => {
        asignarDia()
    }, [])

    return (
        <div className="contenedorFecha">
            <div className="textoFecha">{diaEnLetras}</div>
            <div className="textoFecha">{dia}/{mes}/{anio}</div>
        </div>
    )
}
export default Fecha;