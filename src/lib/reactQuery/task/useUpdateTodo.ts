import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { QUERY_KEY } from "../../../constants/queryKeys.ts";
import {  updateTaskRowInTodoTable } from "../../../services/apiTask.ts";


export function useUpdateTodo() {
 const queryClient = useQueryClient();
  const updateTodoMutation = useMutation(async(creds:  {
    id: string;
    column_name: string;
    column_value: string | boolean;
}) => await updateTaskRowInTodoTable(creds), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.tasks])
      toast.success("todo has been updated successfully", {
        duration: 4000,
        position: 'top-center',
        icon: '💪',
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

  return updateTodoMutation;
}
