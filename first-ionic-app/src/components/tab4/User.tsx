import React, { FC } from "react";
import { USER } from "../../types/user";
import { FaTrash } from "react-icons/fa";
import { IonAlert, IonButton } from "@ionic/react";
import DeleteAlert from "../alerts/DeleteAlert";
import { useDeleteUserQuery } from "../../hooks/users/useDeleteUserQuery";

const User: FC<USER> = (user) => {
  const deleteUser = useDeleteUserQuery();

  return (
    <>
      <div className="w-72 h-32 border flex flex-col items-center justify-center relative">
        {/* <button className="top-2 right-2 absolute text-red-500 bg-white p-2 rounded">
        <FaTrash />
      </button> */}
        <IonButton
          className="top-2 right-2 absolute text-red-500"
          id={`present-alert-${user.id}`}
        >
          <FaTrash />
        </IonButton>
        <h2 className="text-center text-xl mb-4">
          {user.first_name} {user.last_name}
        </h2>
        <p className="text-center">Email: {user.email}</p>
      </div>
      <DeleteAlert
        data={user}
        deleteFn={() => deleteUser.mutate(user.id)}
        confirmText="Are you sure you want to delete?"
      />
    </>
  );
};

export default User;
