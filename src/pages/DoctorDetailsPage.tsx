import React from 'react';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import { IonHeader, IonRouterOutlet, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonList, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonToggle } from '@ionic/react';
import PatientListPage from './PatientListPage';
import PatientDetailsPage from './PatientDetailsPage';
import { Speaker } from '../models/Speaker';
import { Session } from '../models/Session';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import './Details.scss';

interface OwnProps { };

interface StateProps {
  speakers: Speaker[];
};

interface DispatchProps { };

interface DoctorDetailsProps extends OwnProps, StateProps, DispatchProps { };

const DoctorDetailsPage: React.FC<DoctorDetailsProps> = ({ speakers }) => {

  return (
    <IonPage id="doctor-details">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/homepage"></IonBackButton>
          </IonButtons>
          <IonTitle>Dr. Thomas - Neuro Surgeon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="online-content" className="details-online-content">
        <IonItem lines="none">
          <IonLabel color="status"><h1>Online</h1></IonLabel>
          <IonToggle slot="end" value="pepperoni" color="togglebutton" onChange={() => { }} />
        </IonItem>
      </IonContent>
      <IonReactRouter>
        <IonRouterOutlet id="patient-route-outlet" className="details-router-outletion-below-online-content">
          <Route path="/doctordetailspage/patientlist/:id" component={PatientDetailsPage} exact={true} />
          <Route path="/doctordetailspage/patientlist" component={PatientListPage} exact={true} />
          <Route exact path="/doctordetailspage" render={() => <Redirect to="/doctordetailspage/patientlist" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    speakers: selectors.getSpeakers(state),
  }),
  component: React.memo(DoctorDetailsPage)
});