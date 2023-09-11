import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { QUERY_KEY } from "../../../constants/queryKeys.ts";
import { TaskType, insertTaskRowIntoTodoTable } from "../../../services/apiTask.ts";


export function useCreateTodo() {
 const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createTodoMutation = useMutation(async(creds: TaskType) => await insertTaskRowIntoTodoTable(creds), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.tasks])
      navigate("/");
      toast.success("todo has been added to list", {
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

  return createTodoMutation;
}
