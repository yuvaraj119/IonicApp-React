import React from 'react';
import { IonLabel, IonItem, IonIcon, IonList, IonButton } from '@ionic/react';
import './PatientItem.css';
import { sync } from 'ionicons/icons';

interface RankingScaleItemProps {
    data: string;
    isRankingScale: boolean;
}

interface RankingScaleItemProps { };

const RankingScaleItem: React.FC<RankingScaleItemProps> = ({ data, isRankingScale }) => {
    return (
        <IonList>
            <IonItem lines="none">
                <IonLabel slot="start" color="accordancecardtime">{isRankingScale?"No ranking scale to show":"No test results to show"}</IonLabel>
                <IonIcon icon={sync} color="accordanceheading" slot="end" />
            </IonItem>
            <IonItem lines="none">
                <IonButton className="rankingscale-button-text" slot="end" size="small" fill="clear" color="accordanceheading">
                    {isRankingScale?"Request ranking scale":"Request test results"}
                </IonButton>
            </IonItem>
        </IonList>
    );
};

export default RankingScaleItem;