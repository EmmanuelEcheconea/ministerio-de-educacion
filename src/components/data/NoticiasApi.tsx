import { IonSlide, IonCol, IonImg, IonRow} from "@ionic/react";
import React, { useEffect, useState } from "react";
import Notificacion from "../../interfaces/Notificacion";
import "./Noticiasapi.css"

/*
las props pueden ser:
lenght
ultimaNoticia
arrayNotificaciones
*/
type Props = {
  noticias: boolean;
}; 


const NoticiasApi: React.FC<Props> = (props) => {
  let [UrlApi, setUrlApi] = useState(
   //para lo de esteban  "http://localhost/public/api/Noticias"
    
   "https://localhost:5001/obtenerNoticias"
  );

  let [listaNotif, setListaNotif] = useState([]);
  var flag = true;

/*
  useEffect(() => {
    const solicitudNoticias = {
      headers: new Headers({
        'Content-Type': 'application/json'}),
      method: "GET"
    };

    fetch(UrlApi, solicitudNoticias)
      .then(function (response) {
        return response.json();
      })
      .then(function (resp:any) {
        console.log(resp);
       //para esteban setListaNotif(resp[0]);
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
  
  if (!props.noticias && listaNotif != null) {
    return <>{listaNotif.length}</>;

  } else{
    return (
      <div>
        {listaNotif?.slice(0, 1).map((noti: Notificacion, indice) => {
          return (
            <div  key={noti.id}>
              <IonRow>
              <IonCol size="2">
              <div> <IonImg className="imagenUltimanoticia"  src="/assets/imagenes/escudo-nacional.png"></IonImg></div>
              </IonCol>
              <IonCol size="10">
              <h3 className="NoticiaDestacada">{noti.titulo}</h3>
              <h6>{noti.descripcion.slice(0, 100) + "..."}</h6>
              </IonCol>
              </IonRow>
        
                </div>
          );
        }
        )}
      </div>
    );
  }
};
export default NoticiasApi;
