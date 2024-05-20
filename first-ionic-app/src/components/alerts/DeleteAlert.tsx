import { IonAlert } from "@ionic/react";
import React, { FC } from "react";

type PROPS = {
  data: {
    id: number;
  };
  confirmText: string;
  deleteFn: () => void;
};

const DeleteAlert: FC<PROPS> = (props) => {
  const { data, deleteFn, confirmText } = props;

  return (
    <IonAlert
      header={confirmText}
      trigger={`present-alert-${data.id}`}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Alert canceled");
          },
        },
        {
          text: "Delete",
          role: "confirm",
          handler: async () => {
            deleteFn();
          },
        },
      ]}
      onDidDismiss={({ detail }) =>
        console.log(`Dismissed with role: ${detail.role}`)
      }
    ></IonAlert>
  );
};

export default DeleteAlert;
