import { IonButton, IonImg } from "@ionic/react";
import React from "react";
// import { Plugins } from '@capacitor/core';
import "./TarjetaSeccion.css";
import Seccion from "../../../interfaces/Seccion";
import { createUseStyles } from "react-jss";
import { Link, useHistory } from "react-router-dom";
import FuncionDePrueba from '../../../hooks/FuncionDePrueba';

type Props = {
  seccion: Seccion;
};

const TarjetaSeccion: React.FC<Props> = (props) => {
  FuncionDePrueba();
  // const { App } = Plugins;
  const history = useHistory();

  const { seccion } = props;

  const style = createUseStyles({
    tarjetaSeccionEstilo: {
      color: "white",
      width: "100%",
      // // backgroundColor: `tomato`,
      // // // backgroundColor: `${contenido.color}CC`,
      // // '&:hover': {
      // //     backgroundColor: `navy`
      // // }
    },
  });

  const classes = style();

  return (
    // <div className={classes.tarjetaSeccionEstilo} >
    <div className="contenedorDeBotonesMenu">
      {/* <IonImg src='assets/imagenes/facebook.png' /> */}
      <IonImg
        className="imagenDentroContenedor"
        src={seccion.icon}
        onClick={() => history.push(`/secciones${seccion.ruta}`)}
      />
      <IonButton
        className="boton"
        expand="full"
        size="large"
        onClick={() => history.push(`/secciones${seccion.ruta}`)}
      >
        {seccion.seccion}
      </IonButton>
    </div>
  );
};

export default TarjetaSeccion;
