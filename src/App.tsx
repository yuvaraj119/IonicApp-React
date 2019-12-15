import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import { connect } from './data/connect';
import { AppContextProvider } from './data/AppContext';
import { loadConfData } from './data/sessions/sessions.actions';
import { setIsLoggedIn, setUsername, loadUserData } from './data/user/user.actions';
import { Session } from "./models/Session";

import DoctorDetailsPage from "./pages/DoctorDetailsPage";
import PatientDetailsPage from "./pages/PatientDetailsPage";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicAppConnected />
    </AppContextProvider>
  );
};

interface StateProps {
  darkMode: boolean,
  sessions: Session[],
}

interface DispatchProps {
  loadConfData: typeof loadConfData;
  loadUserData: typeof loadUserData;
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

interface IonicAppProps extends StateProps, DispatchProps { }

const IonicApp: React.FC<IonicAppProps> = ({ darkMode, sessions, setIsLoggedIn,
  setUsername, loadConfData, loadUserData }) => {

  useEffect(() => {
    loadUserData();
    loadConfData();
    // eslint-disable-next-line
  }, []);

  return (
    sessions.length === 0 ? (
      <div></div>
    ) : (
        <IonApp className={`${darkMode ? 'dark-theme' : 'dark-theme'}`}>
          <IonReactRouter>
            <IonRouterOutlet id="main">
              <Route path="/homepage" component={Home} />
              <Route path="/doctordetailspage" component={DoctorDetailsPage} />
              <Route path="/patientdetailspage/:id" component={PatientDetailsPage} />
              <Route exact path="/" render={() => <Redirect to="/homepage" />} />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      )
  )
}

// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonRouterOutlet>
//         <Route path="/home" component={Home} exact={true} />
//         <Route exact path="/" render={() => <Redirect to="/home" />} />
//       </IonRouterOutlet>
//     </IonReactRouter>
//   </IonApp>
// );

export default App;

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    sessions: state.data.sessions
  }),
  mapDispatchToProps: { loadConfData, loadUserData, setIsLoggedIn, setUsername },
  component: IonicApp
});
