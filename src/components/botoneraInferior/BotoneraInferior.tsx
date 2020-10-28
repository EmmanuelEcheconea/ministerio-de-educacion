import {
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
  IonIcon,
  IonTitle,
} from "@ionic/react";
import BotonApp from "../botones/botonApp/BotonApp";
import React from "react";
import "./BotoneraInferior.css";
import Contenido from "../../interfaces/Contenido";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import BotonLink from "../botones/botonLink/BotonLink";
import { Plugins } from "@capacitor/core";
import FuncionDePrueba from "../../hooks/FuncionDePrueba"

type Props = {
  contenidos: Array<Contenido>;
};

const BotoneraInferior: React.FC<Props> = (props) => {
  const { contenidos } = props;

  const { Browser } = Plugins;

  const history = useHistory();
  const { App } = Plugins;

  const lanzarApp = async (contenido: Contenido) => {
    var ret = await App.canOpenUrl({ url: contenido.contenidoUrl });
    var retx = await App.openUrl({ url: contenido.contenidoUrl });
  };

  const AbrirBuscador = async (contenido: Contenido) => {
    await Browser.open({
      url: contenido.contenidoUrl,
      toolbarColor: "#c154f8",
    });
  
  };

  const botones = contenidos.map((contenido) => {
    switch (contenido.tipo) {
      case "app":
        return (
          <IonCol size="5.5" key={contenido.id} className="ColumnCorta">
            <div onClick={() => lanzarApp(contenido)}>
              <IonTitle>{contenido.nombre}</IonTitle>
              <IonImg className="divImagen" src={contenido.icon} />
            </div>
          </IonCol>
        );
      case "link":
        return (
          <IonCol
            size="5.5"
            key={contenido.id}
            className="ColumnCorta"
            onClick={() => AbrirBuscador(contenido)}
          >
            <div>
              <IonImg className="divImagen" src={contenido.icon} />
            </div>
          </IonCol>
        );
      case "page":
        return (
          <IonCol
            size="5.5"
            key={contenido.id}
            className="ColumnCorta"
            onClick={() => history.push(contenido.contenidoUrl)}
          >
            <div>
              <IonImg className="divImagen" src={contenido.icon} />
            </div>
          </IonCol>
        );
    }
  });
  return (
    <>
      <IonGrid>
        <IonRow>{botones}</IonRow>
      </IonGrid>
    </>
  );
};

export default BotoneraInferior;
