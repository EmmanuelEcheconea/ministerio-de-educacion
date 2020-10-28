import { IonButton } from "@ionic/react";
import React from "react";
import { OpenNativeSettings } from "@ionic-native/open-native-settings";

type Props = {
  path: string;
};
const EntrarSettings: React.FC<Props> = (props) => {
  const AbrirSettings = async () => {
    OpenNativeSettings.open(props.path);
  };

  return (
    <div>
      <IonButton onClick={AbrirSettings} size="large">
        Abrir Settings
      </IonButton>
    </div>
  );
};

export default EntrarSettings;
