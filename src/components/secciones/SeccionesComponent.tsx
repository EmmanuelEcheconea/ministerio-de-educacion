import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import React from "react";
import TarjetaSeccion from "../botones/tarjetaSeccion/TarjetaSeccion";
import { useHistory } from "react-router";
import Seccion from "../../interfaces/Seccion";

type Props = {
  secciones: Array<Seccion>;
};

const SeccionesComponent: React.FC<Props> = (props) => {
  const { secciones } = props;

  const history = useHistory();

  const tarjetasSecciones = secciones.map((seccion) => {
    return (
      <IonCol size="2.4" key={seccion.id}>
        <TarjetaSeccion seccion={seccion} />
      </IonCol>
    );
  });

  return (
    <>
      <IonGrid>
        <IonRow className="ion-primary">{tarjetasSecciones}</IonRow>
      </IonGrid>
    </>
  );
};

export default SeccionesComponent;
