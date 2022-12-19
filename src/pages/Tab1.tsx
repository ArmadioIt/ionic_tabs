import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import { useHistory } from 'react-router-dom'

const Tab1: React.FC = () => {

  useEffect(() => {
    console.log("First wisit: Tab1")        
  }, []);

  const history = useHistory()
  useEffect(() => {
      history.listen((location) => {
          if (location.pathname == "/tab1"){
            console.log("Rewisiting: Tab1")  
          }
      })
  }, [history])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
