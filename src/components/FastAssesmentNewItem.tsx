import React from 'react';
import { IonLabel, IonList, IonCard } from '@ionic/react';
import './PatientItem.css';
import { FastAssessmentModel } from '../models/FastAssessmentModel';

interface FastAssesmentNewItemProps {
    data: any;
}

interface FastAssesmentNewItemProps { };

const FastAssesmentNewItem: React.FC<FastAssesmentNewItemProps> = ({ data }) => {

    const getData = (json: any) => {
        var data: Array<FastAssessmentModel> = json.data
        return data;
    }

    return (
        <IonList>
            {getData(data).map(item => (
                <IonCard className="fast-assessment-new-list">
                    <IonLabel className="fast-assessment-list-label">{item.title + ":"}</IonLabel>
                    <IonLabel><h3>{item.question}</h3></IonLabel>
                    <IonLabel><h5>{item.answer}</h5></IonLabel>
                    <IonLabel><h5>{item.side}</h5></IonLabel>
                </IonCard>
            ))}
        </IonList>
    );
};

export default FastAssesmentNewItem;