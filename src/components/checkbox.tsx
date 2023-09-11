import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { MdOutlineCheck } from "react-icons/md";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  checked?: boolean; // Make checked prop optional
  onChangeHandler?: (checked: boolean) => void; // Add a callback for onChange
};

const CheckBox = ({
  name,
  checked: propChecked,
  onChangeHandler,
  children,
  ...rest
}: Props) => {
  const [checked, setChecked] = useState(propChecked || false);

  const handleCheckboxClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChangeHandler) {
      onChangeHandler(newChecked);
    }
  };

  return (
    <label className="inline-flex items-center gap-2 w-full cursor-pointer font-work-sans relative">
      <input
        id={name}
        type="checkbox"
        checked={checked}
        className={`absolute h-0 w-0 opacity-0`}
        {...rest}
        onChange={handleCheckboxClick}
      />
      <span className="relative mt-1 inline-block h-6 w-6 cursor-pointer">
        <span
          className={`${
            checked
              ? "bg-transparent border-secondary-hover"
              : "bg-white/90 border-gray-300"
          } absolute rounded-lg border-2 border-solid left-0 top-0 h-full w-full  transition-all duration-[0.2s] ease-in-out flex items-center justify-center`}
        ></span>
        {checked && (
          <MdOutlineCheck className="absolute inset-0 z-10 m-auto h-5 w-5 fill-current font-bold text-secondary-hover transition-all duration-[0.2s] ease-in-out" />
        )}
      </span>
      <span className="w-[calc(100%_-_2.5rem)] ">{children}</span>
    </label>
  );
};

export default CheckBox;
