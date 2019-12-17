import React, { useState } from 'react';
import { IonContent, IonList, IonGrid, IonRow, IonCol, IonPage, IonLabel, IonHeader, IonToolbar, IonButtons, IonBackButton, IonItem } from '@ionic/react';
import { Speaker } from '../models/Speaker';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import './Details.css';
import Accordian from '../components/Accordion';

interface OwnProps { };

interface StateProps {
    patient?: Speaker;
};

interface DispatchProps { };

interface PatientDetailsProps extends OwnProps, StateProps, DispatchProps { };

const PatientDetailsPage: React.FC<PatientDetailsProps> = ({ patient }) => {


    const menu: Array<{ title: string, data: string }> = Array(
        {
            title: 'Symptoms',
            data: 'Biryani also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan.',
        },
        {
            title: 'Region Affected',
            data: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
        },
        {
            title: 'Fast Assessment',
            data: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
        },
        {
            title: 'NIHSS',
            data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        },
        {
            title: 'Vital Signs',
            data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        },
        {
            title: 'Patient Image',
            data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        },
        {
            title: 'Ranking Scale',
            data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        },
        {
            title: 'Send Patient to Radiology',
            data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        },
        {
            title: 'Request Lab Test Results',
            data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        },
        {
            title: 'Patient Tranfer Timeline',
            data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        },
        {
            title: 'Patient Tranfer Timeline 1',
            data: 'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
        });

    const [items] = useState(menu)

    if (!patient) {
        return <div>Patient details not found</div>
    }
    return (
        <IonPage id="patient-details-page">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/homepage"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent id="patient-content">
                <IonGrid className="patient-info">
                    <IonRow class="ion-justify-content-evenly">
                        <IonCol size="6" size-sm className={["ion-padding", "ion-text-start"].join(" ")} >
                            <IonLabel>Patient</IonLabel>
                        </IonCol>
                        <IonCol size="6" size-sm className={["ion-padding", "ion-text-end"].join(" ")}>
                            <IonLabel className="patient-details-name-text-bold">{patient.name}</IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-justify-content-evenly">
                        <IonCol size="6" size-sm className={["ion-padding", "ion-text-start"].join(" ")} >
                            <IonLabel>Sex : {patient.sex}</IonLabel>
                        </IonCol>
                        <IonCol size="6" size-sm className={["ion-padding", "ion-text-end"].join(" ")}>
                            <IonLabel>Age : {patient.age}</IonLabel>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList>
                    {patient.patientInfo.map(item => (
                        <Accordian
                            data={item} />
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default connect({
    mapStateToProps: (state, ownProps) => ({
        patient: selectors.getSpeaker(state, ownProps),
    }),
    component: React.memo(PatientDetailsPage)
});