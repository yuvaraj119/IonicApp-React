import React from 'react';
import { IonItem, IonImg } from '@ionic/react';
import './PatientItem.css';


interface RegionAffectedItemProps {
    data: string;
}

interface RegionAffectedItemProps { };

const RegionAffectedItem: React.FC<RegionAffectedItemProps> = ({ data }) => {

    return (
        <IonItem lines='none' className={["region-affected-item-card"].join(" ")}>
            <IonImg className={["region-affected-item-image"].join(" ")} src={process.env.PUBLIC_URL + "/assets/img/human.jpg"} />
        </IonItem>
    );
};

export default RegionAffectedItem;