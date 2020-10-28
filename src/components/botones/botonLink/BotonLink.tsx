import { IonButton, IonImg } from "@ionic/react";
import React from "react";
import { Plugins } from "@capacitor/core";
import "./BotonLink.css";
import Contenido from "../../../interfaces/Contenido";
import { createUseStyles } from "react-jss";

type Props = {
  contenido: Contenido;
};

const BotonLink: React.FC<Props> = (props) => {
  const { contenido } = props;

  const { Browser } = Plugins;

  const style = createUseStyles({
    botonLinkEstilo: {
      color: "white",
      width: "100%",
      // backgroundColor: `${contenido.color}CC`,
      // '&:hover': {
      //     backgroundColor: `${contenido.color}99`
      // }
    },
  });

  const classes = style();

  const AbrirBuscador = async () => {
    await Browser.open({
      url: contenido.contenidoUrl,
      toolbarColor: "#c154f8",
    });
  };

  return (
    <div className={classes.botonLinkEstilo}>
      <IonImg src={contenido.icon} />
      <IonButton className="boton" expand="block" size="large">
        {contenido.nombre}
      </IonButton>
    </div>
  );
};

export default BotonLink;
