import React from 'react';
import { IoMdBatteryFull } from 'react-icons/io';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Plugins } from '@capacitor/core';

const BotonBateria: React.FC = () => {
    const { Toast } = Plugins;
    const bate = BatteryStatus;


    const showToast = async () => {
        const subscription = bate.onChange().subscribe(status => {

            Toast.show({
                text: status.level.toString()
            });
            console.log(status.level, status.isPlugged);

        });

        subscription.unsubscribe();
    }
    /*
            const subscription = bate.onChange().subscribe(status => {
                console.log(status.level, status.isPlugged);
    
            });*/
    //subscription.unsubscribe();


    // stop watch

    return (
        <IoMdBatteryFull onClick={showToast} className="customizedIcon"></IoMdBatteryFull>
    )
}
export default BotonBateria;