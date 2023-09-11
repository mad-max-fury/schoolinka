import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUp, userPropsType } from "../../../services/apiAuth.ts";
import toast from "react-hot-toast";


export function useSignUp() {

  const navigate = useNavigate();

  const signUpMutation = useMutation(async(creds: userPropsType) => await signUp(creds), {
    onSuccess: () => {
      navigate("/");
      toast.success("Account created successfully", {
        duration: 4000,
        position: 'top-center',
        icon: '👏👏👏',
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

  return signUpMutation;
}
