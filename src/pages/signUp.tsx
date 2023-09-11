import { FormProvider, useForm } from "react-hook-form";
import InputField from "../components/inputField";
import CButton from "../components/button";
import { Link } from "react-router-dom";
import { useSignUp } from "../lib/reactQuery/auth/useSignUp";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth from "../utils/schemas/auth";
import { userPropsType } from "../services/apiAuth";

const SignUp = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(Auth.auhSignupSchema),
  });
  const signUp = useSignUp();
  const onSubmit = (data: userPropsType) => {
    signUp.mutate(data);
    if (signUp.isSuccess) methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <div className="h-fit w-full max-w-[398px] mx-auto  flex flex-col items-start justify-start px-4">
        <div className="flex flex-col w-full gap-4 mb-4 items-start justify-start">
          <h1 className="text-start text-gray-700  text-[clamp(26px,5vw,32px)] font-bold leading-9">
            ToDo
          </h1>
          <div className=" text-start text-gray-500 text-[16px] font-normal leading-normal">
            Don't forget any task, todo is here for you.
          </div>
        </div>
        <form className="w-full" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 mb-4">
            <InputField
              type="text"
              name="full_name"
              labelText="fullname*"
              placeholder="Enter your full name"
            />
            <InputField
              type="email"
              name="email"
              labelText="email"
              placeholder="Enter your email"
            />
            <InputField
              type="password"
              name="password"
              labelText="Password*"
              placeholder="Enter your password"
            />
          </div>
          <CButton
            value={"Sign Up"}
            type="submit"
            loading={signUp.isLoading}
            className="p-[14px_23px] flex-row-reverse  w-full text-white hover:bg-secondary text-sm font-semibold bg-secondary-hover rounded-lg"
          />
        </form>
        <div className="inline-flex items-start justify-center gap-1 mt-6 ">
          <Link
            to="/"
            className="flex items-center justify-center font-normal leading-tight text-gray-500 text-[clamp(14px,5vw,18px)]"
          >
            Already have an account?
            <span className="items-center ml-[8px] justify-center text-tert underline font-medium">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </FormProvider>
  );
};

export default SignUp;
