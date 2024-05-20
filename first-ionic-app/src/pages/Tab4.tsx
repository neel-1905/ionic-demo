import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import UsersList from "../components/tab4/UsersList";
import CreateUserForm from "../components/tab4/CreateUserForm";

const Tab4 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 4 page" /> */}
        <div className="mb-3">
          <CreateUserForm />
        </div>
        <UsersList />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
