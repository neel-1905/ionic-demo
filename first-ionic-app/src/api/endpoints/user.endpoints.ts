import { ID } from "../../types/id.types";

export const userEndpoints = {
  getAllUsers: "/users",
  deleteUser: (id: ID) => `/users/${id}`,
  createUser: `/users`,
};
