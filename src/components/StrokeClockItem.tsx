import React from 'react';
import { IonLabel, IonItem, IonList } from '@ionic/react';
import './PatientItem.css';
import { StrokeClockModel } from '../models/StrokeClockModel';

interface StrokeClockItemProps {
    data: any;
}

interface StrokeClockItemProps { };

const StrokeClockItem: React.FC<StrokeClockItemProps> = ({ data }) => {

    const getData = (json: any) => {
        var title: StrokeClockModel = json
        return title;
    }

    return (
        <IonItem lines="none">
            <IonList className="stroke-list">
                <IonLabel className="ion-text-center"><h3>{"Time since symptom onset"}</h3></IonLabel>
                <IonLabel color="accordanceheading" className={["ion-text-center","stroke-list-time"].join(" ")}><h1>{getData(data.time)}</h1></IonLabel>
                <IonLabel className="ion-text-center"><h3>{"Nuronal Loss"}</h3></IonLabel>
                <IonLabel color="accordanceheading" className="ion-text-center"><h1>{getData(data.nuronal_loss)}</h1></IonLabel>
            </IonList>
        </IonItem>
    );
};

export default StrokeClockItem;