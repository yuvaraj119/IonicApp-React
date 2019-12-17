import React from 'react';
import { IonLabel, IonItem, IonCardSubtitle, IonList, IonButton } from '@ionic/react';
import { SymptomsModel } from '../models/SymptomsModel';


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
        <IonItem lines='none'>
            <IonList>
                {
                    getData(data).map(item => (
                        <IonLabel className={["ion-padding", "ion-text-wrap"].join(" ")}>{item.data}</IonLabel>
                    ))
                }
                {patientTransferTime &&
                    <IonItem lines="none" slot="end">
                        <IonButton className="rankingscale-button-text" slot="end" size="small" fill="clear" color="accordanceheading">
                            Request patient transfer to neuro
                        </IonButton>
                    </IonItem>
                }
                {vitalsign &&
                    <IonItem lines="none" slot="end">
                        <IonCardSubtitle slot="end" color="accordancecardtime" className="accordian-card-time">Time 12:15 Am</IonCardSubtitle>
                    </IonItem>
                }
            </IonList>
        </IonItem>
    );
};

export default Symptoms;