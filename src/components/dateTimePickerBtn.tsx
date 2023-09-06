import { GoCalendar, GoClock } from "react-icons/go";

type Props = {
  type: "date" | "time";
  name: string;
};

const DateTimePickerBtn = ({ type, name }: Props) => {
  return (
    <>
      <label
        htmlFor={name}
        className="w-[100px] h-10 px-2 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex cursor-pointer"
      >
        <div className="w-5 h-5 relative">
          {type === "date" ? (
            <GoCalendar size={20} aria-label="Select date" />
          ) : (
            <GoClock size={20} aria-label="Select time" />
          )}
        </div>
        <div className="text-gray-500 text-sm font-semibold leading-tight">
          00:00
        </div>
      </label>
    </>
  );
};

export default DateTimePickerBtn;
