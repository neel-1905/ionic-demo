import { IonButton, IonInput, IonItem, IonList } from "@ionic/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useCreateUserQuery } from "../../hooks/users/useCreateUserQuery";

type FORM = {
  first_name: string;
  last_name: string;
  email: string;
};

const CreateUserForm = () => {
  const createUser = useCreateUserQuery();
  const { status } = createUser;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FORM>({
    defaultValues: undefined,
  });

  const onCreate = async (data: FORM) => {
    console.log(data);
    createUser.mutate(data);
  };

  return (
    <>
      <div className="m-10">
        <form onSubmit={handleSubmit(onCreate)}>
          <IonList className="flex flex-col gap-3">
            <IonItem>
              <IonInput
                {...register("first_name")}
                label="First Name"
                labelPlacement="stacked"
                className=""
                placeholder="First Name"
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonInput
                label="Last Name"
                labelPlacement="stacked"
                className=""
                {...register("last_name")}
                placeholder="Last Name"
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonInput
                label="Email"
                labelPlacement="stacked"
                className=""
                {...register("email")}
                placeholder="Email"
              ></IonInput>
            </IonItem>

            <IonButton type="submit">
              {status === "pending" ? "Submitting" : "Submit"}
            </IonButton>
          </IonList>
        </form>
      </div>
    </>
  );
};

export default CreateUserForm;
