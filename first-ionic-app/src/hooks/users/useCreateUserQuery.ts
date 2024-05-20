import { useMutation } from "@tanstack/react-query";
import { userService } from "../../api/services/user/userService";
import { queryClient } from "../../main";

export const useCreateUserQuery = () => {
  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: (data) => {
      console.log(data);
      return queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
