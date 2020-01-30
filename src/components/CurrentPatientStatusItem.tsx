import React from 'react';
import { IonLabel, IonItem } from '@ionic/react';
import './PatientItem.css';
import { SymptomsModel } from '../models/SymptomsModel';

interface CurrentPatientStatusItemProps {
    data: any;
}

interface CurrentPatientStatusItemProps { };

const CurrentPatientStatusItem: React.FC<CurrentPatientStatusItemProps> = ({ data }) => {

    const getData = (json: any) => {
        var title: Array<SymptomsModel> = json.data
        return title.join();
    }

    return (
        <IonItem lines="none">
            <IonLabel color="dark-grayish-lime-green" className={["ion-text-wrap","current-patient-status"].join(" ")}>{getData(data)}</IonLabel>
        </IonItem>
    );
};

export default CurrentPatientStatusItem;