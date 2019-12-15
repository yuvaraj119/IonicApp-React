import React, { useState } from 'react';
import { IonLabel, IonItem, IonCheckbox, IonList, IonButton } from '@ionic/react';
import './PatientItem.css';

interface SendPatientRadiologyItemProps {
    data: string;
}

interface SendPatientRadiologyItemProps { };

const SendPatientRadiologyItem: React.FC<SendPatientRadiologyItemProps> = ({ data }) => {

    const menu: Array<{ title: string, url: string, checked: boolean }> = Array(
        {
            title: 'Symptoms',
            url: 'http://placekitten.com/g/200/300',
            checked: true
        },
        {
            title: 'Pizzas',
            url: 'http://placekitten.com/g/200/300',
            checked: true
        },
        {
            title: 'Drinks',
            url: 'http://placekitten.com/g/200/300',
            checked: true
        },
        {
            title: 'Deserts',
            url: 'http://placekitten.com/g/200/300',
            checked: true
        });

    const [checkBoxArray, setCheckBoxArray] = useState(menu)

    return (
        <IonList>
            {checkBoxArray.map((image, i) => (
                <IonItem>
                    <IonCheckbox slot="start" value={data} checked={image.checked} className="ion-checkbox radiology" />
                    <IonLabel>{image.title}</IonLabel>
                </IonItem>
            ))}
        </IonList>
    );
};

export default SendPatientRadiologyItem;