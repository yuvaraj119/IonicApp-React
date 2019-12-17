import React, { useState } from 'react';
import { IonLabel, IonItem, IonCard, IonList, IonThumbnail, IonImg, IonButton } from '@ionic/react';
import './PatientItem.css';
import { PatientImageModel } from '../models/PatientImageModel';

interface PatientImageItemProps {
    data: any;
}

interface PatientImageItemProps { };

const PatientImageItem: React.FC<PatientImageItemProps> = ({ data }) => {

    const [showAll, setShowAll] = useState(false);

    const toggleShowHide = () => {
        setShowAll(!showAll);
    };

    const getData = (json: any): Array<PatientImageModel> => {
        var title: Array<PatientImageModel> = json.data
        return title;
    }

    return (
        <IonCard className="accordian-card">
            <IonItem lines="none">
                <IonButton hidden size="small" fill="clear" slot="start"></IonButton>
                <IonButton size="small" fill="clear" slot="end" onClick={() => toggleShowHide()}>{showAll?"Hide":"Show all"}</IonButton>
            </IonItem>
            {
                !showAll &&
                <IonItem>
                    <IonThumbnail slot="start">
                        <IonImg src={getData(data)[0].url} />
                    </IonThumbnail>
                    <IonLabel>{getData(data)[0].title}</IonLabel>
                </IonItem>
            }
            {showAll &&
                <IonList>
                    {getData(data).map((image, i) => (
                        <IonItem key={i}>
                            <IonThumbnail slot="start">
                                <IonImg src={image.url} />
                            </IonThumbnail>
                            <IonLabel>{image.title}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            }
        </IonCard>
    );
};

export default PatientImageItem;