import React from 'react';
import { IonLabel, IonItem } from '@ionic/react';
import './PatientItem.css';

interface NihssItemProps {
    data: string;
}

interface NihssItemProps { };

const NihssItem: React.FC<NihssItemProps> = ({ data }) => {
    return (
        <IonItem lines="none">
            <IonLabel color="accordancecardtime" className="ion-text-center"><h1>{"NIHS Score: 17"}</h1></IonLabel>
        </IonItem>
    );
};

export default NihssItem;