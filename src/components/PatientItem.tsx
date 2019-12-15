import React from 'react';
import { Speaker } from '../models/Speaker';
import { IonAvatar, IonRow, IonCol, IonButton } from '@ionic/react';
import './PatientItem.css';
import { Callback } from '../util/types';

interface PatientItemProps {
    patient: Speaker;
    onPressCallBack: Callback<number>;
}

interface PatientItemProps { };

const PatientItem: React.FC<PatientItemProps> = ({ patient, onPressCallBack }) => {
    return (
        <IonRow>
            <IonCol size="6" size-sm className={["ion-text-center", "patient-list-item", "patient-list-item-name"].join(" ")}>
                <IonButton onClick={() => onPressCallBack(patient.id)} expand="block" fill="clear" className="text-button"> <h5>{patient.name}</h5></IonButton>
            </IonCol>
            <IonCol size="6" size-sm className={["ion-text-center", "patient-list-item", "code-list-item-name"].join(" ")}>
                <IonButton onClick={() => onPressCallBack(patient.id)} expand="block" fill="clear" className="text-button">
                    <IonAvatar className="item-avatar" slot="start">
                        <img src={process.env.PUBLIC_URL + patient.profilePic} alt="Speaker profile pic" />
                    </IonAvatar>
                </IonButton>
            </IonCol>
        </IonRow>
    );
};

export default PatientItem;