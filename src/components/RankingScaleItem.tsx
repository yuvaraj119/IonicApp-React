import React from 'react';
import { IonLabel, IonItem, IonIcon, IonList, IonButton, IonRow, IonCol } from '@ionic/react';
import './PatientItem.css';
import { sync } from 'ionicons/icons';

interface RankingScaleItemProps {
    data: any;
    isRankingScale: boolean;
}

interface RankingScaleItemProps { };

const RankingScaleItem: React.FC<RankingScaleItemProps> = ({ data, isRankingScale }) => {
    return (
        <IonList>
            <IonRow>
                <IonCol size="9" size-sm className={["ion-text-left"].join(" ")}>
                    <IonLabel color="accordancecardtime"><h2>{isRankingScale ? "No ranking scale to show" : "No test results to show"}</h2></IonLabel>
                </IonCol>
                <IonCol size="3" size-sm className={["ion-text-right","ion-align-self-center"].join(" ")}>
                    <IonIcon icon={sync} color="accordanceheading" className="rankingscale-image" />
                </IonCol>
            </IonRow>
            <IonItem lines="none">
                <IonButton className="rankingscale-button-text" slot="end" size="small" fill="clear" color="accordanceheading">
                    {isRankingScale ? "Request ranking scale" : "Request test results"}
                </IonButton>
            </IonItem>
        </IonList>
    );
};

export default RankingScaleItem;