import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../../../constants/queryKeys.ts";
import { signIn } from "../../../services/apiAuth.ts";
import toast from "react-hot-toast";
import { saveUser } from "./user.localstore.ts";

type SigninPropType= {
  email: string;
  password: string;
}
export function useSignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const signInMutation = useMutation(async({email,password}: SigninPropType) => await signIn(email, password), {
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      saveUser(data.user)
      navigate("/dashboard");
      toast.success("Welcome back ✨✨✨", {
        duration: 4000,
        position: 'top-center',
      });
    },
    onError: ({message}) => {
      toast.error(message, {
        duration: 4000,
        position: 'top-center',
        icon: '😒',
      });
    },
  });

  return signInMutation;
}
