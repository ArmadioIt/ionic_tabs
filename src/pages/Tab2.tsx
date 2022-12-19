import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import { useHistory } from 'react-router-dom'

const Tab2: React.FC = () => {

  useEffect(() => {
    console.log("First wisit: Tab2")        
  }, []);

  const history = useHistory()
  useEffect(() => {
      history.listen((location) => {
          if (location.pathname == "/tab2"){
            console.log("Rewisiting: Tab2")  
          }
      })
  }, [history])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
