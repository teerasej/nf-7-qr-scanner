import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner' 

const Home: React.FC = () => {

  const onStartScan = async () => {
    await BarcodeScanner.checkPermission({force: true})
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nextflow Scanner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={onStartScan}>Scan</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
