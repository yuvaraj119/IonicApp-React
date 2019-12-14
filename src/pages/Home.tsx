import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonToggle,
  IonItemGroup, IonItemDivider, IonIcon, IonListHeader
} from '@ionic/react';
import React, { useState } from 'react';
import { connect } from '../data/connect';
import { RouteComponentProps, withRouter } from 'react-router';
import { setDarkMode } from '../data/user/user.actions';

interface Pages {
  title: string,
  path: string,
  icon: { ios: string, md: string },
  routerDirection?: string
}
interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
}

interface DispatchProps {
  setDarkMode: typeof setDarkMode
}

interface HomeProps extends RouteComponentProps, StateProps, DispatchProps { }

const Home: React.FC<HomeProps> = ({ darkMode, history, isAuthenticated, setDarkMode }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollEvents={true} scrollY={true}>
        <IonItem lines="none" onClick={() => {
          history.push('/doctordetailspage');
        }}>
          <IonLabel><h1>Dr. Thomas - Neuro Surgeon</h1></IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonLabel color="status"><h1>Online</h1></IonLabel>
          <IonToggle slot="end" value="pepperoni" color="togglebutton" onChange={() => { }} />
        </IonItem>
        <IonList>
          <IonListHeader>
            <IonLabel color="togglebutton"><h1>Personal Info</h1></IonLabel>
            <IonIcon ios="ios-arrow" md="md-arrow" slot="end"></IonIcon>
          </IonListHeader>
          <IonItem class="ion-padding" lines="none">
            <IonLabel slot="start" class="testclass">Patient</IonLabel>
            <IonLabel slot="end">John Samson</IonLabel>
          </IonItem>
          <IonItem>Item 2</IonItem>
          <IonItem>Item 3</IonItem>
          <IonItem>Item 4</IonItem>
          <IonItem>Item 5</IonItem>
        </IonList>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel color="primary"><h1>Personal Info</h1></IonLabel>
            <IonIcon ios="ios-arrow" md="md-arrow" slot="end"></IonIcon>
          </IonItemDivider>

          <IonItem>
            <IonLabel>Angola</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Argentina</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Armenia</IonLabel>
          </IonItem>
        </IonItemGroup>
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Brandy</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
            </IonBadge>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
