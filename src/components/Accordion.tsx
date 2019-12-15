import React, { useState } from 'react';
import { IonLabel, IonItem, IonIcon, IonCard, IonCardSubtitle } from '@ionic/react';
import { arrowDropdownCircle, arrowDropupCircle } from 'ionicons/icons';
import Symptoms from './Symptoms';
import RegionAffectedItem from './RegionAffectedItem';
import FastAssesmentItem from './FastAssesmentItem';
import NihssItem from './NihssItem';
import PatientImageItem from './PatientImageItem';
import RankingScaleItem from './RankingScaleItem';
import SendPatientRadiologyItem from './SendPatientRadiologyItem';
import './PatientItem.css';

interface AccordianProps {
    data: string;
    title: string;
}

interface AccordianProps { };

const Accordian: React.FC<AccordianProps> = ({ title, data }) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const getView = (type: string, data: string) => {
        switch (type) {
            case "Symptoms": return <Symptoms data={data} vitalsign={false} patientTransferTime={false} />
            case "Region Affected": return <RegionAffectedItem data={data} />
            case "Fast Assessment": return <FastAssesmentItem data={type} />
            case "NIHSS": return <NihssItem data={data} />
            case "Vital Signs": return <Symptoms data={data} vitalsign={true} patientTransferTime={false} />
            case "Patient Image": return <PatientImageItem data={data} />
            case "Ranking Scale": return <RankingScaleItem data={data} isRankingScale={true} />
            case "Send Patient to Radiology": return <SendPatientRadiologyItem data={data} />
            case "Request Lab Test Results": return <RankingScaleItem data={data} isRankingScale={false} />
            case "Patient Tranfer Timeline": return <Symptoms data={data} vitalsign={false} patientTransferTime={true} />
            default: return <IonItem><IonLabel>No Data</IonLabel></IonItem>
        }
    }

    return (
        <IonCard className="accordian-card">
            <IonCardSubtitle color="accordancecardtime" className="accordian-card-time">12:15 Am</IonCardSubtitle>
            <IonItem color="accordanceheadingbg" onClick={() => toggleExpand()} lines='none'>
                <IonLabel color="accordanceheading">{title}</IonLabel>
                <IonIcon icon={expanded ? arrowDropupCircle : arrowDropdownCircle} color="accordanceheading" />
            </IonItem>
            {
                expanded && getView(title, data)
            }
        </IonCard>
    );
};

export default Accordian;