import React from "react";
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow,
} from "@ionic/react";

const TakePhotoComponent = () => {
  const { takePhoto, photos } = usePhotoGallery();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
      }}
    >
      {/* <button onClick={() => takePhoto()}>Take a Photo</button> */}
      <IonButtons slot="start">
        <IonButton onClick={() => takePhoto()}>Take a Photo</IonButton>
      </IonButtons>

      <IonGrid>
        <IonRow>
          {photos.map((photo) => (
            <IonCol size="6" key={photo.filepath}>
              <IonImg src={photo.webviewPath} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default TakePhotoComponent;
