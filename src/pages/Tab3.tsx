import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import { useHistory } from 'react-router-dom'

const Tab3: React.FC = () => {

  useEffect(() => {
    console.log("First wisit: Tab3")        
  }, []);

  const history = useHistory()
  useEffect(() => {
      history.listen((location) => {
          if (location.pathname == "/tab3"){
            console.log("Rewisiting: Tab3")  
          }
      })
  }, [history])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
