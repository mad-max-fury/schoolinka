import supabase from "./superbase";

export type TaskType  ={
user_id:string;
task:string;
start_time:string;
end_time:string;
due_date:Date;
reminder:boolean;
}

export async function insertTaskRowIntoTodoTable(columns:TaskType){
const { data, error } = await supabase
  .from('todo')
  .insert([columns])
  .select()
   if (error) {
    throw new Error(error.message);
  }
  return data;
}