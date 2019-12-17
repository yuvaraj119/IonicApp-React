import React from 'react';
import { IonLabel, IonItem } from '@ionic/react';
import './PatientItem.css';
import { NHSModel } from '../models/NHSModel';

interface NihssItemProps {
    data: any;
}

interface NihssItemProps { };

const NihssItem: React.FC<NihssItemProps> = ({ data }) => {

    const getData = (json: any) => {
        var title: NHSModel = json
        return title.score;
    }

    return (
        <IonItem lines="none">
            <IonLabel color="accordancecardtime" className="ion-text-center"><h1>{`NIHS Score: ${getData(data)}`}</h1></IonLabel>
        </IonItem>
    );
};

export default NihssItem;