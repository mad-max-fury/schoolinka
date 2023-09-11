import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import * as userLocalStorage from "./user.localstore";
import toast from "react-hot-toast";
import { QUERY_KEY } from "../../../constants/queryKeys";
import { signOut } from "../../../services/apiAuth";


export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const signOutQuery = useQuery([], signOut, {
    onSuccess: () => {
      queryClient.setQueryData([QUERY_KEY.user], null);
      userLocalStorage.removeUser();
      navigate("/");
      toast.success("See you later!");
    },
    onError: ({message}) => {
      toast.error(message);
    },
    enabled: false,
  });

  return signOutQuery;
}
