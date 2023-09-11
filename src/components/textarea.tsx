import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

type Props = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  labelText: string;
  name: string;
};

const InputFieldTextArea = ({
  placeholder,
  name,
  labelText,
  className,
  ...rest
}: Props) => {
  const { formState, register } = useFormContext();

  const errors = formState.errors;
  const errorMessage = errors[name]?.message;

  return (
    <div
      tabIndex={0}
      className={`relative w-full  focus-within:border-gold-200 outline-none   ${className} 
        `}
    >
      <label htmlFor={name} className="sr-only">
        {labelText}
      </label>
      <textarea
        placeholder={placeholder}
        {...register(name)}
        {...rest}
        className={`w-full text-start relative h-full bg-transparent   pl-4 outline-none text-base  font-normal placeholder:text-black placeholder:text-opacity-40 placeholder:text-base placeholder:font-normal grow shrink basis-0  py-2  leading-normal bg-gray-50 rounded-lg border  justify-start items-start gap-2 inline-flex resize-none ${
          formState.errors[name]
            ? "border-red-500 text-red-600 focus-within:border-red-500"
            : "border-gray-300 text-gray-500 "
        }`}
      />

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

export default InputFieldTextArea;
