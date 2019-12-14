import React from 'react';
import { IonContent, IonList, IonGrid, IonRow, IonCol, IonPage } from '@ionic/react';
import { Speaker } from '../models/Speaker';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import './PatientListPage.scss';

interface OwnProps { };

interface StateProps {
    patient?: Speaker;
};

interface DispatchProps { };

interface PatientDetailsProps extends OwnProps, StateProps, DispatchProps { };

const PatientDetailsPage: React.FC<PatientDetailsProps> = ({ patient }) => {
    if (!patient) {
        return <div>Patient not found</div>
    }
    return (
        <IonPage>
            <IonContent id="patient-list">
                <IonList>
                    <IonGrid>
                        <IonRow class="ion-justify-content-evenly">
                            <IonCol className={["ion-padding", "patient-list-item", "ion-text-center", "patient-list-item-name"].join(" ")} >
                                <h3 className="patient-list-item-heading-text">{patient.name}</h3>
                            </IonCol>
                            <IonCol className={["ion-padding", "patient-list-item", "ion-text-center"].join(" ")}>
                                <h3 className="patient-list-item-heading-text">Code</h3>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
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