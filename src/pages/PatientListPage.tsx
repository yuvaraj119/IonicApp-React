import React from 'react';
import { IonContent, IonList, IonGrid, IonRow, IonCol, IonPage, IonItem } from '@ionic/react';
import PatientItem from '../components/PatientItem';
import { Speaker } from '../models/Speaker';
import { Session } from '../models/Session';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import './PatientListPage.scss';

interface OwnProps { };

interface StateProps {
    patients: Speaker[];
};

interface DispatchProps { };

interface PatientListProps extends OwnProps, StateProps, DispatchProps { };

const PatientListPage: React.FC<PatientListProps> = ({ patients }) => {
    return (
        <IonPage>
            <IonContent id="patient-list">
                <IonList>
                    <IonGrid>
                        <IonRow class="ion-justify-content-evenly">
                            <IonCol className={["ion-padding", "patient-list-item", "ion-text-center", "patient-list-item-name"].join(" ")} >
                                <h3 className="patient-list-item-heading-text">Patient Name</h3>
                            </IonCol>
                            <IonCol className={["ion-padding", "patient-list-item", "ion-text-center"].join(" ")}>
                                <h3 className="patient-list-item-heading-text">Code</h3>
                            </IonCol>
                        </IonRow>
                        {patients.map(patientMap => (
                            <PatientItem
                                key={patientMap.id}
                                patient={patientMap}
                            />
                        ))}
                    </IonGrid>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default connect<OwnProps, StateProps, DispatchProps>({
    mapStateToProps: (state) => ({
        patients: selectors.getSpeakers(state),
    }),
    component: React.memo(PatientListPage)
});