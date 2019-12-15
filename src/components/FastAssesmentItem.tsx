import React from 'react';
import { IonRow, IonCol, IonLabel } from '@ionic/react';
import './PatientItem.css';

interface FastAssesmentItemProps {
    data: string;
}

interface FastAssesmentItemProps { };

const FastAssesmentItem: React.FC<FastAssesmentItemProps> = ({ data }) => {
    return (
        <IonRow>
            <IonCol size="6" size-sm className={["ion-text-left", "fast-assessment-col-left"].join(" ")}>
                <IonLabel color="white"><h5>{data}</h5></IonLabel>
            </IonCol>
            <IonCol size="6" size-sm className={["ion-text-left", "fast-assessment-col-right"].join(" ")}>
            <IonLabel color="white"><h5>{data}</h5></IonLabel>
            </IonCol>
        </IonRow>
    );
};

export default FastAssesmentItem;