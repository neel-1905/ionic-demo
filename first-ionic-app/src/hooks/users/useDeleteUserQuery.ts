import { useMutation } from "@tanstack/react-query";
import { userService } from "../../api/services/user/userService";
import { queryClient } from "../../main";

export const useDeleteUserQuery = () => {
  return useMutation({
    mutationFn: userService.deleteUser,
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
