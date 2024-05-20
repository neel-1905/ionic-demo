import React, { useEffect, useState } from "react";
import { USER } from "../../types/user";
import { userService } from "../../api/services/user/userService";
import { useUsersQuery } from "../../hooks/users/useUsersQuery";
import User from "./User";

const UsersList = () => {
  const { status, data, error } = useUsersQuery();

  if (status === "pending") return <p className="text-3xl">Loading...</p>;

  if (status === "error") return <p>{error.message}</p>;

  return (
    <>
      <div className="text-white flex gap-3 flex-wrap justify-center items-center">
        {data?.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </div>
    </>
  );
};

export default UsersList;
