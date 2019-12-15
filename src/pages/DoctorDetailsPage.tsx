import React from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonBackButton, IonList, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonToggle } from '@ionic/react';
import { Speaker } from '../models/Speaker';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import * as selectors from '../data/selectors';
import PatientItem from '../components/PatientItem';

interface OwnProps extends RouteComponentProps { };

interface StateProps {
  patients: Speaker[];
};

interface DispatchProps { };

interface DoctorDetailsProps extends OwnProps, StateProps, DispatchProps { };

const DoctorDetailsPage: React.FC<DoctorDetailsProps> = ({ history, patients }) => {

  var moveToAnotherScreen = (patientId: number): void => {
    history.push(`/patientdetailspage/${patientId}`)
  }

  return (
    <IonPage id="doctor-details">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/homepage"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent id="online-content" className="details-online-content">
        <IonItem lines="none">
          <IonLabel><h1>Dr. Thomas - Neuro Surgeon</h1></IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel color="status"><h1>Online</h1></IonLabel>
          <IonToggle slot="end" value="pepperoni" color="togglebutton" onChange={() => { }} />
        </IonItem>
        <IonList>
          <IonGrid>
            <IonRow class="ion-justify-content-evenly">
              <IonCol className={["ion-padding", "patient-list-item", "ion-text-center", "patient-list-item-name"].join(" ")} >
                <h3 className="patient-list-item-heading-text">Patient Name</h3>
              </IonCol>
              <IonCol className={["ion-padding", "patient-list-item", "ion-text-center", "code-list-item-name"].join(" ")}>
                <h3 className="patient-list-item-heading-text">Code</h3>
              </IonCol>
            </IonRow>
            {patients.map(item => (
              <PatientItem
                key={item.id}
                patient={item}
                onPressCallBack={moveToAnotherScreen}
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
  component: DoctorDetailsPage
});