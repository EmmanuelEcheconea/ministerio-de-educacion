import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterOutlet,
} from "@ionic/react";
import React from "react";
import "./Home.css";
// import BarraSuperior from "../components/barraSuperior/BarraSuperior";
import secciones from "../secciones.json";
import botonesinferiores from "../botoneraInferior.json";
import settingsEnabled from "../settingsEnabled.json";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import TarjetaSeccion from "../components/botones/tarjetaSeccion/TarjetaSeccion";
import { IonReactRouter } from "@ionic/react-router";
import SeccionesComponent from "../components/secciones/SeccionesComponent";
import SeccionComponent from "../components/seccion/SeccionComponent";
import BandejaMensajes from "../components/botones/bandejaMensajes/BandejaMensajes";
import BotoneraInferior from "../components/botoneraInferior/BotoneraInferior";
import Notificaciones from "../components/notificaciones/Notificaciones";
import SettingsPage from "./SettingsPage";
import BotPage from "./BotPage";
import LoginPage from "./LoginPage";

const Home: React.FC = () => {
  const history = useHistory();

  const rutas = secciones.map((seccion) => {
    return (
      <Route
        key={seccion.id}
        path={`/secciones${seccion.ruta}`}
        render={() => <SeccionComponent seccion={seccion} />}
      />
    );
  });

  const tarjetasSecciones = secciones.map((seccion) => {
    return (
      <IonCol size="2" key={seccion.id}>
        <TarjetaSeccion seccion={seccion} />
      </IonCol>
    );
  });

  return (
    <>
      <IonPage>
        <IonHeader className="ion-header">
          {/* <IonToolbar>
            {<BarraSuperior />}
          </IonToolbar> */}
        </IonHeader>
        <IonContent>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route
                path="/home"
                exact={true}
                render={() => {
                  return (
                    <>
                      <SeccionesComponent secciones={secciones} />
                      <IonGrid>
                        <IonRow>
                          <IonCol size="7.1" className="claseColumnaIzq">
                            <BandejaMensajes></BandejaMensajes>
                          </IonCol>
                          <IonCol size="4.9" className="claseColumna">
                            <BotoneraInferior contenidos={botonesinferiores} />
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </>
                  );
                }}
              />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              {rutas}
              <Route
                exact
                path={"/notificaciones"}
                render={() => <Notificaciones />}
              />
              <Route exact path={"/bot"} render={() => <LoginPage/>} />
              <Route
                exact
                path={"/settings"}
                render={() => (
                  <SettingsPage configuraciones={settingsEnabled} />
                )}
              />
              <Route exact path={"/login"} render={() => <LoginPage/>} />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
