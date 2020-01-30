import React from 'react';
import { IonRow, IonCol, IonLabel, IonList } from '@ionic/react';
import './PatientItem.css';
import { FastAssessmentModel } from '../models/FastAssessmentModel';

interface FastAssesmentItemProps {
    data: any;
}

interface FastAssesmentItemProps { };

const FastAssesmentItem: React.FC<FastAssesmentItemProps> = ({ data }) => {

    const getData = (json: any) => {
        var title: Array<FastAssessmentModel> = json.data
        return title;
    }

    return (
        <IonList className="fast-assessment-list">
            {getData(data).map(item => (
                <IonRow>
                    <IonCol size="6" size-sm className={["ion-text-left", "fast-assessment-col-left"].join(" ")}>
                        <IonLabel color="white"><h5>{item.title}</h5></IonLabel>
                    </IonCol>
                    <IonCol size="6" size-sm className={["ion-text-left", "fast-assessment-col-right"].join(" ")}>
                        <IonLabel color="white"><h5>{item.question}</h5></IonLabel>
                    </IonCol>
                </IonRow>
            ))}
        </IonList>
    );
};

export default FastAssesmentItem;