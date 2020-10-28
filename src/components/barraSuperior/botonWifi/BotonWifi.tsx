import React from 'react';
import { IoIosWifi } from 'react-icons/io';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

const BotonWifi: React.FC = () => {

    const AbrirSettings = async () => {
        OpenNativeSettings.open("wifi");
    }

    return (
        <IoIosWifi onClick={AbrirSettings} className="customizedIcon"></IoIosWifi>
    )
}

export default BotonWifi;