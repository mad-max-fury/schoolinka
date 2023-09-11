import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useFormContext } from "react-hook-form";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  labelText: string;
  name: string;
};

const InputField = ({
  type,
  placeholder,
  name,
  labelText,
  className,
  ...rest
}: Props) => {
  const { formState, register } = useFormContext();
  const errors = formState.errors;
  const [show, hide] = useState(false);

  const errorMessage = errors[name]?.message;

  return (
    <div
      tabIndex={0}
      className={`relative w-full h-[50px] focus-within:border-gray-300 outline-none  ${className} ${
        formState.errors[name]
          ? "border-red-500 focus-within:border-red-500"
          : ""
      } `}
    >
      <label htmlFor={name} className="sr-only">
        {labelText}
      </label>
      <input
        placeholder={placeholder}
        type={type && !show ? type : "text"}
        {...register(name)}
        {...rest}
        className={`w-full text-start relative h-full bg-transparent  pl-4 outline-none text-base text-opacity-70 font-normal placeholder:absolute placeholder:top-[50%] placeholder:translate-y-[-50%] placeholder:left-4  placeholder:text-black placeholder:text-opacity-60 placeholder:text-sm placeholder:font-normal grow shrink basis-0  leading-normal bg-gray-50 rounded-lg hover:shadow border  justify-start items-start gap-2 inline-flex ${
          formState.errors[name]
            ? "border-red-500 text-red-600 focus-within:border-red-500"
            : "border-gray-300 text-gray-500 "
        }`}
      />
      {type === "password" && (
        <button
          onClick={() => hide(!show)}
          type="button"
          className="absolute h-6 w-6 text-black text-opacity-70 right-[10px] top-1/2 -translate-y-1/2"
        >
          {!show ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
        </button>
      )}
      {/* Display error message if available */}
      {errorMessage && typeof errorMessage === "string" && (
        <p
          className={`text-red-500 bg-inherit absolute w-full left-0 transition-all text-xs ease-in-out duration-[0.3s] bg-white ${
            errors[name] ? "top-[calc(100%_+_0.3rem)]" : "top-[50%]  z-[-1]"
          } `}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;
