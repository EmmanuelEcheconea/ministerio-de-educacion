import React, { useEffect, useState } from "react";
import "./LoginPage.css";


import {
    IonCol,
    IonBackButton,
    IonContent,
    IonButton,
    IonSlide,
    IonGrid,
    IonButtons,
    IonRow,
    IonSlides,
    IonIcon,
    IonImg,
    IonToast, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption
} from "@ionic/react";

import { Plugins } from '@capacitor/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import {BarcodeScanner} from'@ionic-native/barcode-scanner';
const LoginPage: React.FC = () => {

    const { Device } = Plugins;
    const botonInfo: any = async () => {
        await console.log((await Device.getInfo()).uuid);
    }

    let [dataQR, setDataQr] = useState("");
    let [dni, setDni] = useState("");
    let [nombre, setNombre] = useState("");
    let [apellido, setApellido] = useState("");
    let [numTramite, setNumTramite] = useState("");
    let [sexo, setSexo] = useState(false);
    let [fechaNac, setFechaNac] = useState("");
    let [code, setCode] = useState();

    var types = ["PDF417", "QR Code"];
    var options = {
        beep: true,  // Beep on
        noDialog: true,
        uncertain: false, //Recommended
        quietZone: false, //Recommended
        highRes: false, //Recommended
        inverseScanning: false,
        frontFace: false
    };

    const printData = () => {
        console.log("clickeo" + dni);
    }
    const cambio = (valor: any, campo: string) => {
        // console.log("funcion de cambio");
        if (campo === "DNI") {
            console.log(valor.detail.value);
            setDni(valor.detail.value);
            console.log("Se seteo el dni" + {dni}.dni);
        }
    }
    const openScanner = async () => {
        const data = await BarcodeScanner.scan({ prompt: 'Escanea el DNI', formats: 'PDF_417' });
        const code: Array<any> = data.text.split('@');
        if (code[0].length == 11) {
            //Es un documento nuevo
            // setCode(code.ToString());
            setDni(code[4]);
            setApellido(code[1]);
            setNombre(code[2]);
            setNumTramite(code[0]);
            if (code[3] == "M") {
                setSexo(true); //si es masculino true
            }
            else {
                setSexo(false); //si es femenino false
            }



        }
        else {
            //es un ducmuento viejo
            // setCode(code.ToString());
            setDni(code[1]);
            setApellido(code[4]);
            setNombre(code[5]);
            setNumTramite(code[10]);
            if (code[8] == "M") {
                setSexo(true); //si es masculino true
            }
            else {
                setSexo(false); //si es femenino false
            }

        }

        //tengo que parsear esto
        console.log(`Barcode data: ${data.text}`);
        setDataQr(data.text + " " + code);
    };

    return (
        <>
            <IonContent className="container ion-padding">
                {/* <IonButton onClick={botonInfo}>Boton</IonButton> */}


                <IonImg src="assets/imagenes/logo-ministerio.png" className="imagenEnacom" />


                <div className="div-scan-qr">
                    <IonLabel><h2>Bienvenido a +Simple! ingrese sus datos para poder empezar</h2></IonLabel>
                    <IonImg src="assets/imagenes/scan-qr.ico" className="imagenQr" onClick={openScanner} />
                    <h5>Escanee su DNI para mayor facilidad</h5>
                    {/* <div className="scan-qr" onClick={openScanner}>AquÃ­</div> */}
                </div>
                <form>
                    <IonItem>
                        <IonLabel position="floating">Nombre/s y Apellido:</IonLabel>
                        <IonInput value={nombre} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Apellido/s:</IonLabel>
                        <IonInput value={apellido} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">DNI:</IonLabel>
                        <IonInput type="number" value={dni} onIonChange={(value) => cambio(value, "DNI")} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Numero de tramite:</IonLabel>
                        <IonInput value={numTramite} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Email:</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Telefono:</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Sexo:</IonLabel>
                        <IonSelect placeholder="Seleccione..." value={sexo} >
                            <IonSelectOption value={false}>Femenino</IonSelectOption>
                            <IonSelectOption value={true}>Maculino</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonButton className="ion-margin-top" expand="block" onClick={printData}>
                        {/* <IonButton className="ion-margin-top" type="submit" expand="block" > */}
              Login
            </IonButton>
                </form>
                {/* <h2  className="ion-float-right">{dataQR}</h2> */}

            </IonContent >
        </>

    );
};
export default LoginPage;