import React, { useState } from 'react';
import { IonLabel, IonItem, IonCard, IonList, IonThumbnail, IonImg, IonButton } from '@ionic/react';
import './PatientItem.css';

interface PatientImageItemProps {
    data: string;
}

interface PatientImageItemProps { };

const PatientImageItem: React.FC<PatientImageItemProps> = ({ data }) => {

    const menu: Array<{ title: string, url: string }> = Array(
        {
            title: 'Symptoms',
            url: 'http://placekitten.com/g/200/300'
        },
        {
            title: 'Pizzas',
            url: 'http://placekitten.com/g/200/300'
        },
        {
            title: 'Drinks',
            url: 'http://placekitten.com/g/200/300'
        },
        {
            title: 'Deserts',
            url: 'http://placekitten.com/g/200/300'
        });

    const [imageArray, setImageArray] = useState(menu)
    const [showAll, setShowAll] = useState(false);

    const toggleShowHide = () => {
        setShowAll(!showAll);
    };

    return (
        <IonCard className="accordian-card">
            <IonItem lines="none">
                <IonButton size="small" fill="clear" slot="start" onClick={() => toggleShowHide()}>Show all</IonButton>
                <IonButton size="small" fill="clear" slot="end" onClick={() => toggleShowHide()}>Hide</IonButton>
            </IonItem>
            {
                !showAll &&
                <IonItem>
                    <IonThumbnail slot="start">
                        <IonImg src={imageArray[0].url} />
                    </IonThumbnail>
                    <IonLabel>{imageArray[0].title}</IonLabel>
                </IonItem>
            }
            {showAll &&
                <IonList>
                    {imageArray.map((image, i) => (
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