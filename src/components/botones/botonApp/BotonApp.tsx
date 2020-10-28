import { IonButton, IonImg } from "@ionic/react";
import React from "react";
import { Plugins } from "@capacitor/core";
import "./BotonApp.css";
import Contenido from "../../../interfaces/Contenido";
import { createUseStyles } from "react-jss";
import { AppAvailability } from "@ionic-native/app-availability";
import { Market } from "@ionic-native/market";

type Props = {
  contenido: Contenido;
};

const BotonApp: React.FC<Props> = (props) => {
  const { App } = Plugins;

  const { contenido } = props;

  const abrirMarket: any = (appId: string) => {
         
      Market.open(appId);
      
  };

  const style = createUseStyles({
    botonAppEstilo: {
      color: "white",
      width: "100%",
      // backgroundColor: `${contenido.color}CC`,
      // '&:hover': {
      //     backgroundColor: `${contenido.color}99`
      // }
    },
  });

  const classes = style();
//aca esta
  const lanzarApp = async () => {
    AppAvailability.check(contenido.contenidoUrl).then(
      (yes:boolean) => {
      var ret =  App.canOpenUrl({ url: contenido.contenidoUrl });
      var retx =  App.openUrl({ url: contenido.contenidoUrl });
      },
      (no:boolean) =>{
      abrirMarket(contenido.contenidoUrl)
      }
    )

/*
    if (AppAvailability.check(contenido.contenidoUrl)) {
      var ret = await App.canOpenUrl({ url: contenido.contenidoUrl });
      var retx = await App.openUrl({ url: contenido.contenidoUrl });
      console.log(contenido.contenidoUrl + " entre")
    }
    else {
      console.log(contenido.contenidoUrl + " no entre")
      abrirMarket(contenido.contenidoUrl)
    }*/
  };

  return (
    <div className={classes.botonAppEstilo} onClick={lanzarApp}>
      <IonImg src={contenido.icon} />
      <IonButton
        className="boton"
        onClick={lanzarApp}
        expand="block"
        size="large"
      >
        {contenido.nombre}{" "}
      </IonButton>
    </div>
  );
};

export default BotonApp;
