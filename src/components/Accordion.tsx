import React, { useState } from 'react';
import { IonLabel, IonItem, IonIcon, IonCard, IonText, IonCardContent } from '@ionic/react';
import { arrowDropdownCircle, arrowDropupCircle } from 'ionicons/icons';
import Symptoms from './Symptoms';
import CurrentPatientStatusItem from './CurrentPatientStatusItem';
import StrokeClockItem from './StrokeClockItem';
import RegionAffectedItem from './RegionAffectedItem';
import VitalSignsItem from './VitalSignsItem';
import FastAssesmentNewItem from './FastAssesmentNewItem';
import NihssItem from './NihssItem';
import PatientHistoryItem from './PatientHistoryItem';
import PatientImageItem from './PatientImageItem';
import RankingScaleItem from './RankingScaleItem';
import SendPatientRadiologyItem from './SendPatientRadiologyItem';
import './PatientItem.css';

interface AccordianProps {
    data: any;
}

interface AccordianProps { };

const Accordian: React.FC<AccordianProps> = ({ data }) => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const getView = (data: any) => {
        let type = data.type as string
        switch (type) {
            case "Current Patient Status": return <CurrentPatientStatusItem data={data} />
            case "Stroke Clock": return <StrokeClockItem data={data} />
            case "Region Affected": return <RegionAffectedItem data={data} />
            case "Fast Assessment": return <FastAssesmentNewItem data={data} />
            case "NIH Stroke Scale": return <NihssItem data={data} />
            case "Patient History": return <PatientHistoryItem data={data} />
            case "Vital Signs": return <VitalSignsItem data={data} />
            case "Patient Image": return <PatientImageItem data={data} />
            case "Ranking Scale": return <RankingScaleItem data={data} isRankingScale={true} />
            case "Send Patient to Radiology": return <SendPatientRadiologyItem data={data} />
            case "Request Lab Test Results": return <RankingScaleItem data={data} isRankingScale={false} />
            case "Patient Tranfer Timeline": return <Symptoms data={data} vitalsign={false} patientTransferTime={true} />
            default: return <IonItem><IonLabel>No Data</IonLabel></IonItem>
        }
    }

    const getType = (data: any) => {
        return data.type as string;
    }

    return (
        <IonCardContent id="cd-timeline" className="cd-timeline">
            <IonText color="accordancecardtime" className="cd-timeline-picture">{"12:15 am"}</IonText>
            <IonCard className="cd-timeline-content">
                <IonItem color="accordanceheadingbg" onClick={() => toggleExpand()} lines='none'>
                    <IonLabel color="accordanceheading">{getType(data)}</IonLabel>
                    <IonIcon icon={expanded ? arrowDropupCircle : arrowDropdownCircle} color="accordanceheading" />
                </IonItem>
                {
                    expanded && getView(data)
                }
            </IonCard>
        </IonCardContent>
    );
};

export default Accordian;