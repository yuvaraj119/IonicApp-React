import React from 'react';
import { IonContent, IonList, IonGrid, IonRow, IonCol, IonPage, IonLabel, IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import { Speaker } from '../models/Speaker';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import './Details.css';
import Accordian from '../components/Accordion';

interface OwnProps { };

interface StateProps {
    patient?: Speaker;
};

interface DispatchProps { };

interface PatientDetailsProps extends OwnProps, StateProps, DispatchProps { };

const PatientDetailsPage: React.FC<PatientDetailsProps> = ({ patient }) => {


    if (!patient) {
        return <div>Patient details not found</div>
    }
    return (
        <IonPage id="patient-details-page">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/homepage"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent id="patient-content">
                <IonGrid className="patient-info">
                    <IonRow class="ion-justify-content-evenly">
                        <IonCol size="6" size-sm className={["ion-padding", "ion-text-start"].join(" ")} >
                            <IonLabel>Patient</IonLabel>
                        </IonCol>
                        <IonCol size="6" size-sm className={["ion-padding", "ion-text-end"].join(" ")}>
                            <IonLabel className="patient-details-name-text-bold">{patient.name}</IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-justify-content-evenly">
                        <IonCol size="6" size-sm className={["ion-padding", "ion-text-start"].join(" ")} >
                            <IonLabel>Sex : {patient.sex}</IonLabel>
                        </IonCol>
                        <IonCol size="6" size-sm className={["ion-padding", "ion-text-end"].join(" ")}>
                            <IonLabel>Age : {patient.age}</IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList>
                    {patient.patientInfo.map(item => (
                        <Accordian
                            data={item} />
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default connect({
    mapStateToProps: (state, ownProps) => ({
        patient: selectors.getSpeaker(state, ownProps),
    }),
    component: React.memo(PatientDetailsPage)
});