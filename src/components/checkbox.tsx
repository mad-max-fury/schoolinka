import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { MdOutlineCheck } from "react-icons/md";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
};

const CheckBox = ({ name, children, ...rest }: Props) => {
  const [checked, setChecked] = useState<boolean | undefined>(undefined);
  return (
    <label className="inline-flex items-center gap-2 w-full cursor-pointer font-work-sans relative">
      <input
        id={name}
        type="checkbox"
        className={`absolute h-0 w-0 opacity-0`}
        {...rest}
        onChange={() => setChecked(checked ? false : true)}
      />
      <span className="relative  mt-1 inline-block h-5 w-5 cursor-pointer">
        <span
          className={`${
            checked ? "bg-gold-300" : "bg-gray-300"
          } absolute left-0 top-0 h-full w-full  transition-all duration-[0.2s] ease-in-out flex items-center justify-center`}
        ></span>
        {checked && (
          <MdOutlineCheck
            size={25}
            className="absolute inset-0 z-10 m-auto h-4 w-4 fill-current text-white transition-all duration-[0.2s] ease-in-out"
          />
        )}
      </span>
      <span className="w-[calc(100%_-_2.5rem)] ">{children}</span>
    </label>
  );
};

export default CheckBox;
