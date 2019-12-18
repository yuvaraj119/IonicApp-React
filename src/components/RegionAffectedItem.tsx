import React from 'react';
import { IonItem, IonImg } from '@ionic/react';
import './PatientItem.css';
import { RegionAffectedModel } from '../models/RegionAffectedModel';


interface RegionAffectedItemProps {
    data: any;
}

interface RegionAffectedItemProps { };

const RegionAffectedItem: React.FC<RegionAffectedItemProps> = ({ data }) => {

    const getData = (json: any) => {
        var title: Array<RegionAffectedModel> = json.data
        return title;
    }

    return (
        <IonItem lines='none' text-center className={["ion-padding"].join(" ")}>
            <IonImg className={["region-affected-image"].join(" ")} src={getData(data)[0].picture} />
        </IonItem>
    );
};

export default RegionAffectedItem;