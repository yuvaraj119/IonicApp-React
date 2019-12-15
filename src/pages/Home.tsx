import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItem, IonLabel
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
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
          <IonTitle>Ionic App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollEvents={true} scrollY={true}>
        <IonItem lines="none" onClick={() => {
          history.push('/doctordetailspage');
        }}>
          <IonLabel><h1>Login</h1></IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
