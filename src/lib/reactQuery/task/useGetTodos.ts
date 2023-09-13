import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../../../constants/queryKeys";
import { selectTaskRowsFromTodoTable } from "../../../services/apiTask";
import toast from "react-hot-toast";

export function useGetTodos(creds: {user_id:string}) {
  const queryClient = useQueryClient();
  

  const getTodosQuery = useQuery(
    [QUERY_KEY.tasks],
    () => selectTaskRowsFromTodoTable(creds),
    {
      onSuccess: (data) => {
        queryClient.setQueryData([QUERY_KEY.tasks], data);
      },
        onError: ({message}) => {
      toast.error(message, {
        duration: 4000,
        position: 'top-center',
        icon: '😒',
      });
    },
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      enabled:!!creds.user_id
    }
  );

  return getTodosQuery;
}