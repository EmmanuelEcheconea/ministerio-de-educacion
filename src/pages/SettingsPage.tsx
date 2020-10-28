import React from "react";
import Setting from "../interfaces/Setting";
import "./SettingsPage.css";
import { wifi } from "ionicons/icons";
import {
  IonCol,
  IonBackButton,
  IonSlide,
  IonGrid,
  IonButtons,
  IonRow,
  IonSlides,
  IonIcon,
  IonImg,
} from "@ionic/react";
import EntrarSettings from "../components/entrarSettings/EntrarSettings";
import { OpenNativeSettings } from "@ionic-native/open-native-settings";

type Props = {
  configuraciones: Array<Setting>;
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 3.4,
  pager: false,
};

const SettingsPage: React.FC<Props> = (props) => {
  const { configuraciones } = props;


  const AbrirSettings = async (configuracion: Setting) => {
    OpenNativeSettings.open(configuracion.path);

    // await Browser.open({ url: notificacion.url, toolbarColor: "#c154f8" });
  };

  const sett = configuraciones.map((configuracion) => {
    return (
        <IonSlide
          className="Slide"
          key={configuracion.id}
          onClick={() => AbrirSettings(configuracion)}
        >
          <IonCol size="10">
            <IonImg src={configuracion.foto}></IonImg>
            {/* <BotonApp contenido={configuracion.path} /> */}
            <h1>{configuracion.nombre}</h1>
          </IonCol>
        </IonSlide>
    );
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
            {sett}
          </IonSlides>
        </IonRow>
      </IonGrid>
    </>
  );
};
export default SettingsPage;
