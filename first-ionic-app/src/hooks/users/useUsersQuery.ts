import { useQuery } from "@tanstack/react-query";
import { userService } from "../../api/services/user/userService";

export const useUsersQuery = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: userService.getAllUsers,
  });
