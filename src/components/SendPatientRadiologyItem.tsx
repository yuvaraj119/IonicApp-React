import React from 'react';
import { IonLabel, IonItem, IonList, IonIcon } from '@ionic/react';
import './PatientItem.css';
import { checkmark } from 'ionicons/icons';
import {SymptomsModel} from '../models/SymptomsModel';

interface SendPatientRadiologyItemProps {
    data: any;
}

interface SendPatientRadiologyItemProps { };

const SendPatientRadiologyItem: React.FC<SendPatientRadiologyItemProps> = ({ data }) => {

    const getData = (json: any): Array<SymptomsModel> => {
        var title: Array<SymptomsModel> = json.data
        return title;
    }

    return (
        <IonList>
            {getData(data).map((item, i) => (
                <IonItem>
                    <IonIcon icon={checkmark} color="accordanceheading" className="sendpatient-radiology-image" />
                    <IonLabel className="ion-padding">{item.data}</IonLabel>
                </IonItem>
            ))}
        </IonList>
    );
};

export default SendPatientRadiologyItem;