import React from 'react';
import { IonLabel, IonItem, IonCardSubtitle, IonList, IonButton, IonRow, IonCol } from '@ionic/react';
import { SymptomsModel } from '../models/SymptomsModel';
import './PatientItem.css';


interface SymptomsProps {
    data: any;
    vitalsign: boolean;
    patientTransferTime: boolean;
}

interface SymptomsProps { };

const Symptoms: React.FC<SymptomsProps> = ({ data, vitalsign, patientTransferTime }) => {

    const getData = (json: any) => {
        let typeView: string = json.type;
        var title: Array<SymptomsModel> = json.data
        switch (typeView) {
            case "Symptoms":
                return title;
            case "Vital Signs":
                return title;
            case "Patient Tranfer Timeline":
                return title;
            default: return Array<SymptomsModel>();
        }
    }

    return (
        <IonItem lines='none' className="symptoms-content">
            <IonList className="content-with-full-width">
                {
                    getData(data).map(item => (
                        <IonLabel className={["ion-padding", "ion-text-wrap"].join(" ")}>{item.data}</IonLabel>
                    ))
                }
                {patientTransferTime &&
                    <IonRow>
                        <IonCol size="12" size-sm className={["ion-text-right"].join(" ")}>
                            <IonButton className={["rankingscale-button-text","vital-card-time"].join(" ")} size="small" fill="clear" color="accordanceheading">
                                Request patient transfer to neuro OR
                         </IonButton>
                        </IonCol>
                    </IonRow>
                }
                {vitalsign &&
                    <IonRow>
                        <IonCol size="12" size-sm className={["ion-text-right"].join(" ")}>
                            <IonCardSubtitle color="accordancecardtime" className="vital-card-time">Time 12:15 Am</IonCardSubtitle>
                        </IonCol>
                    </IonRow>
                }
            </IonList>
        </IonItem>
    );
};

export default Symptoms;