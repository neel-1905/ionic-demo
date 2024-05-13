import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import TakePhotoComponent from "../components/TakePhotoComponent";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Take a Photo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Take a Photo</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Take a Photo" /> */}
        <TakePhotoComponent />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
