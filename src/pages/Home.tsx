import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonItem, IonLabel, useIonViewWillLeave, useIonViewDidEnter
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { setDarkMode } from '../data/user/user.actions';
import { Plugins, AppUrlOpen, PluginListenerHandle } from '@capacitor/core';


const { App } = Plugins;

interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
}

interface DispatchProps {
  setDarkMode: typeof setDarkMode
}

interface HomeProps extends RouteComponentProps, StateProps, DispatchProps { }

const Home: React.FC<HomeProps> = ({ darkMode, history, isAuthenticated, setDarkMode }) => {

  let moveToAnotherScreen = () => {
    history.push('/doctordetailspage');
  }


  let pluginListenerHandle: PluginListenerHandle;

  useIonViewDidEnter(() => {
    pluginListenerHandle = App.addListener('backButton', (data: AppUrlOpen) => {
      let size = history.length;
      console.log("Exit App?" + size);
      App.exitApp();
    })
  });

  useIonViewWillLeave(() => {
    pluginListenerHandle.remove();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollEvents={true} scrollY={true}>
        <IonItem lines="none" onClick={() => moveToAnotherScreen()}>
          <IonLabel><h1>Login</h1></IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
