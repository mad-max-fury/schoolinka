import supabase from "./superbase";

export type TaskType = {
  user_id: string;
  task: string;
  start_time: string;
  end_time: string;
  due_date: Date;
  reminder: boolean;
};

export async function insertTaskRowIntoTodoTable(columns: TaskType) {
  const { data, error } = await supabase
    .from("todo")
    .insert([columns])
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function selectTaskRowsFromTodoTable({
  user_id,
}: {
  user_id: string;
}) {
  const { data, error } = await supabase
    .from("todo")
    .select("*")
    .eq("user_id", `${user_id}`);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function updateTaskRowInTodoTable({id, column_name, column_value}: {id: string, column_name: string, column_value: string | boolean}) {
  const { data, error } = await supabase
    .from("todo")
    .update({[column_name]: `${column_value}`})
    .eq( 'id', `${id}`)
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
