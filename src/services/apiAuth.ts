import supabase from "./superbase";

export type userPropsType = {
  email: string;
  password: string;
  full_name: string;
};

export async function signUp(fields:userPropsType) { 
  const {email, password, full_name} = fields
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options:{
    data:{ full_name}
    }
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function signIn(email: string, password: string){
  const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
})
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function signOut(){
  const { error } = await supabase.auth.signOut()

   if (error) {
    throw new Error(error.message);
  }
  return [];
}