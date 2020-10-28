import React from 'react';
import Reloj from './reloj/Reloj';
import Fecha from './fecha/Fecha';
import BotonWifi from './botonWifi/BotonWifi';
import BotonBateria from './bateria/Bateria';
import BotonContacto from './botonContacto/BotonContacto';
import BotonAjustes from './botonAjustes/BotonAjustes';
import { IonImg, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
// import logo from '../../imagenes/logo-enacom.png'
import "./BarraSuperior.css"

const BarraSuperior: React.FC = () => {

    return (
        // <div className="barraSuperior">
        //     <div className="horaFecha">
        //         <Reloj />
        //         <Fecha />
        //     </div>
        //     <div>
        //         <IonImg src={logo} className="logo"></IonImg>
        //     </div>
        //     <div className="configuracion">
        //         <BotonContacto />
        //         <BotonWifi />
        //         <BotonBateria />
        //         <BotonAjustes />
        //     </div>
        // </div>
        <IonContent className="barraSuperior">
            <IonGrid>
                <IonRow>
                    <IonCol size="4" className="ion-justify-content-start ion-align-items-center">
                        <div className="horaFecha">
                            <Reloj />
                            <Fecha />
                        </div>
                    </IonCol>
                    <IonCol size="4">
                        <IonImg src="/assets/imagenes/logo-enacom.png" className="logo"></IonImg>
                    </IonCol>
                    <IonCol size="4" className="ion-align-items-center">
                        <div className="ion-text-end">
                            <BotonContacto />
                            <BotonWifi />
                            <BotonBateria />
                            <BotonAjustes />
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )
}
export default BarraSuperior;