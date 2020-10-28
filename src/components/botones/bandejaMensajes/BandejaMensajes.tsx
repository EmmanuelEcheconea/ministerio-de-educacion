import { IonButton, IonImg, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import { IonBadge, IonItem, IonLabel, IonContent,IonSlides } from "@ionic/react";
import "./BandejaMensajes.css";
import { useHistory } from "react-router-dom";
import NoticiasApi from "../../data/NoticiasApi";
import FuncionDePrueba from "../../../hooks/FuncionDePrueba";





const BandejaMensajes: React.FC = (props) => {
  const { handlers } = FuncionDePrueba('com.facebook.lite');
  const history = useHistory();

  return (
    <IonContent className="content">
      <IonItem className="itemCabeceraBandeja">
        <IonLabel>Notificaciones</IonLabel>
        <IonBadge color="danger" slot="end">
          <NoticiasApi noticias={false}></NoticiasApi>
        </IonBadge>
      </IonItem>
      <IonGrid>
        <IonRow>
          <div
            className="divBandeja"
            onClick={() => history.push("/notificaciones")}
          >
            <h1 className="msg">BANDEJA DE ENTRADA</h1>
            {/* <h3>Hola! en esta zona te comunicaremos sobre todas las novedades que sean de tu interes..</h3> */}
       
            <NoticiasApi noticias={true}></NoticiasApi>
          
          </div>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};
export default BandejaMensajes;
