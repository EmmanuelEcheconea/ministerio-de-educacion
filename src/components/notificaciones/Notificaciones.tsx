import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonBackButton,
  IonButtons,
  IonButton,
  IonImg,
  IonText,
} from "@ionic/react";
import React, { useEffect, useState, Fragment } from "react";
import Notificacion from "../../interfaces/Notificacion";
import "./Notificaciones.css";
import { useHistory } from "react-router-dom";
import { Plugins } from "@capacitor/core";
import { parse } from "path";
import NoticiasApi from "../data/NoticiasApi";

type Props = {
  contenidos: Array<Notificacion>;
};

const Notificaciones: React.FC = () => {
  const { Browser } = Plugins;

  const AbrirBuscador = async (notificacion: Notificacion) => {
    await Browser.open({
      url: notificacion.urlAplicacion,
      toolbarColor: "#c154f8",
    });
  };

 //para esteban let [UrlApi, setUrlApi] = useState("http://localhost/public/api/Noticias");
 let [UrlApi, setUrlApi] = useState("https://localhost:5001/obtenerNoticias");
  let [listaNotif, setListaNotif] = useState([]);
  var flag = true;

/*
  useEffect(() => {
    const solicitudNoticias = {
     
      method: "GET"
    };
    fetch(UrlApi, solicitudNoticias)
      .then(function (response) {
        return response.json();
      })
      .then(function (resp:any) {
        console.log(resp);
        // para esteban setListaNotif(resp[0]);
        setListaNotif(resp);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => { });
  }, []
  );*/


useEffect(() => {
  fetch(UrlApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (noticias) {
      setListaNotif(noticias);
      // setCount(count);
      // setNext(next);
      // setPrevious(previous);
      // setResults(results ?? []);
      // console.log(pokemones);
      // console.log(results);
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      // setSpinner(false);
    });
}, [UrlApi]);


  const notif = listaNotif.map((notificacion: Notificacion) => {
    return (
      <IonCol
        size="12"
        key={notificacion.id}
        className="Notificacion"
        onClick={() => AbrirBuscador(notificacion)}
      >
        {/* <div onClick={()=>lanzarApp(contenido)}> */}
        <IonCol size="2">
          <IonImg
            className="divImagenNoticia"
            src="assets/imagenes/escudo-nacional.png"
          />
        </IonCol>
        <IonCol size="10">
          <IonRow className="Titulo">{notificacion.titulo}</IonRow>
          <IonRow>
            <IonText>{notificacion.descripcion}</IonText>
          </IonRow>
        </IonCol>
      </IonCol>
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

      <IonContent>
        <div className="divNotif">{notif}</div>
        {/* <p className="ion-padding-start ion-padding-end">
          <IonButton expand="block" fill="outline">
            Scroll To Top
          </IonButton>
        </p> */}
      </IonContent>
    </>
  );
};
export default Notificaciones;
