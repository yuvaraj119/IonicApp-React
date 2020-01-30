import React from 'react';
import { IonRow, IonCol, IonLabel, IonItem, IonList, IonCard, IonInput, IonText } from '@ionic/react';
import './PatientItem.css';
import { PatientHistoryModel } from '../models/PatientHistoryModel';

interface PatientHistoryItemProps {
    data: any;
}

interface PatientHistoryItemProps { };

const PatientHistoryItem: React.FC<PatientHistoryItemProps> = ({ data }) => {

    const getData = (json: any) => {
        var symptoms: Array<PatientHistoryModel> = json.symptoms
        return symptoms;
    }

    return (
        <IonCard className="patient-history-card">
            <IonList className="fast-assessment-list">
                <IonCard>
                    <IonLabel className="patient-history-label"><h2>Symptoms</h2></IonLabel>
                </IonCard>
                {getData(data).map(item => (
                    <IonRow className="fast-assessment-list-row">
                        <IonCol size="6" size-sm className={["ion-text-center", "square"].join(" ")}>
                            <IonLabel className={["ion-text-center", "ion-text-wrap", "square-content"].join(" ")}>{item.title}</IonLabel>
                        </IonCol>
                        <IonCol size="6" size-sm className={["ion-text-center", "square"].join(" ")}>
                            <IonLabel className={["ion-text-center", "ion-text-wrap", "square-content"].join(" ")}>{item.data}</IonLabel>
                        </IonCol>
                    </IonRow>
                ))}
                <IonCard>
                    <IonLabel className="patient-history-label"><h2>Allergies</h2></IonLabel>
                    <IonLabel className="patient-history-border">Allergies</IonLabel>
                    <IonLabel className="patient-history-label"><h2>Medications</h2></IonLabel>
                    <IonLabel className="patient-history-border">Medications</IonLabel>
                    <IonLabel className="patient-history-label"><h2>Past History</h2></IonLabel>
                    <IonLabel className="patient-history-border">Past History</IonLabel>
                    <IonLabel className="patient-history-label"><h2>Last Meal</h2></IonLabel>
                    <IonLabel className="patient-history-border">Last Meal</IonLabel>
                    <IonLabel className="patient-history-label"><h2>Events Prior</h2></IonLabel>
                    <IonLabel className="patient-history-border">Events Prior</IonLabel>
                </IonCard>
            </IonList>
        </IonCard>
    );
};

export default PatientHistoryItem;