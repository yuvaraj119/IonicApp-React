import React from 'react';
import { IonRow, IonCol, IonLabel, IonItem, IonList, IonCard, IonInput, IonText } from '@ionic/react';
import './PatientItem.css';

interface VitalSignsItemProps {
    data: any;
}

interface VitalSignsItemProps { };

const VitalSignsItem: React.FC<VitalSignsItemProps> = ({ data }) => {

    return (
            <IonList className="fast-assessment-list">
                <IonCard>
                    <IonLabel className="vitalsigns-label-heading">{data.blood_pressure.title}</IonLabel>
                    <IonLabel className="vitalsigns-label-title"><h4>{data.blood_pressure.left.title}</h4></IonLabel>
                    <IonItem>
                        <IonLabel className="vitalsigns-label-title">Systoli</IonLabel>
                        <IonLabel className="vitalsigns-label-title">{data.blood_pressure.left.systoli}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel className="vitalsigns-label-title">Diastolic</IonLabel>
                        <IonLabel className="vitalsigns-label-title">{data.blood_pressure.left.diastolic}</IonLabel>
                    </IonItem>
                </IonCard>
                <IonCard>
                    <IonLabel className="vitalsigns-label-title"><h4>{data.blood_pressure.right.title}</h4></IonLabel>
                    <IonItem>
                        <IonLabel className="vitalsigns-label-title">Systoli</IonLabel>
                        <IonLabel className="vitalsigns-label-title">{data.blood_pressure.right.systoli}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel className="vitalsigns-label-title">Diastolic</IonLabel>
                        <IonLabel className="vitalsigns-label-title">{data.blood_pressure.left.diastolic}</IonLabel>
                    </IonItem>
                </IonCard>
                <IonCard>
                    <IonLabel className="vitalsigns-label-title"><h4>{data.blood_pressure.pulse.title}</h4></IonLabel>
                    <IonItem>
                        <IonLabel className="vitalsigns-label-title">Rate</IonLabel>
                        <IonLabel className="vitalsigns-label-title">{data.blood_pressure.pulse.rate}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel className="vitalsigns-label-title">Rhythm</IonLabel>
                        <IonLabel className="vitalsigns-label-title">{data.blood_pressure.pulse.rhythm}</IonLabel>
                    </IonItem>
                </IonCard>
                <IonCard>
                    <IonLabel className="vitalsigns-label-heading">{data.respiratory_rate.title}</IonLabel>
                    <IonItem>
                        <IonLabel className="vitalsigns-label-title"><h4>{data.respiratory_rate.data}</h4></IonLabel>
                    </IonItem>
                </IonCard>
            </IonList>
    );
};

export default VitalSignsItem;