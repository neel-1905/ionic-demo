import { ID } from "../../../types/id.types";
import { USER } from "../../../types/user";
import { userEndpoints } from "../../endpoints/user.endpoints";
import apiService from "../apiService";

export const userService = {
  getAllUsers: async () => {
    const res = await apiService.get<USER[]>(userEndpoints.getAllUsers);
    return res.data;
  },

  deleteUser: async (id: ID) => {
    const res = await apiService.delete(userEndpoints.deleteUser(id));
    return res.data;
  },

  createUser: async (data: Omit<USER, "id">) => {
    const res = await apiService.post(userEndpoints.createUser, data);
    return res.data;
  },
};
