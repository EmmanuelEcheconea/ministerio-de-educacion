import {
  IonGrid,
  IonRow,
  IonCol,
  IonBackButton,
  IonSlide,
  IonSlides,
  IonButtons,
} from "@ionic/react";
import React, { useEffect } from "react";
import BotonApp from "../botones/botonApp/BotonApp";
import BotonLink from "../botones/botonLink/BotonLink";
import Seccion from "../../interfaces/Seccion";
import { useHistory } from "react-router-dom";
import "./SeccionComponent.css";
import { Plugins } from "@capacitor/core";
import Contenido from "../../interfaces/Contenido";
import clickEnApp from "../../hooks/botones/clickEnApp";

type Props = {
  seccion: Seccion;
};
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 3.3,
  pager: true,
};

const SeccionComponent: React.FC<Props> = (props) => {
  const { App, Browser } = Plugins;
  // const { Browser } = Plugins;
  const { seccion } = props;

  const history = useHistory();

  const lanzarApp = async (contenido: Contenido) => {
    RegistarClick(contenido);
    var ret = await App.canOpenUrl({ url: contenido.contenidoUrl });
    var retx = await App.openUrl({ url: contenido.contenidoUrl });
  };

  const AbrirBuscador = async (contenido: Contenido) => {
    RegistarClick(contenido);
    await Browser.open({
      url: contenido.contenidoUrl,
      toolbarColor: "#c154f8",
    });
  };

  const RegistarClick = (contenido: Contenido) => {
    console.log(
      contenido.nombre + " " + contenido.id + " " + contenido.contenidoUrl
    );
    // clickEnApp(contenido.nombre);
  };

  const botones = seccion.contenidos.map((contenido) => {
    switch (contenido.tipo) {
      case "app":
        return (
          <IonSlide 
          key={contenido.id}
          className="Slide" 
          onClick={() => lanzarApp(contenido)}>
            <IonCol size="10" >
              <BotonApp contenido={contenido} />
            </IonCol>
          </IonSlide>
        );
      case "link":
        return (
          <IonSlide className="Slide" onClick={() => AbrirBuscador(contenido)}>
            <IonCol size="10" >
              <BotonLink contenido={contenido} />
            </IonCol>
          </IonSlide>
        );
    }
  });

  return (
    <>
      <IonButtons>
        <IonBackButton
          text="Volver"
          color="primary"
          defaultHref="/"
        ></IonBackButton>
      </IonButtons>

      <IonGrid>
        <IonRow>
          <IonSlides pager={true} options={slideOpts}>
            {botones}
          </IonSlides>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default SeccionComponent;
