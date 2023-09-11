import { useState } from "react";
import CheckBox from "./checkbox";
import { useDisplay } from "../context/display";

type Props = {
  active: boolean;
  fn: () => void;
};

const TaskCard = ({ fn, active }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);

  const { switchDisplayMethod } = useDisplay();
  return (
    <div
      className={` ${
        active ? "bg-light-purple" : "bg-gray-50"
      } p-[14px_24px]  border-gray-200 hover:bg-light-purple border-b border-solid w-full flex justify-between items-center transition-all ease-in-out duration-500 cursor-pointer`}
      onClick={() => {
        fn();
        switchDisplayMethod(active ? "calender" : "preview");
      }}
    >
      <div className="flex gap-2 items-center justify-center">
        <span>
          <CheckBox name="todo-1" onChangeHandler={setChecked} />
        </span>
        <div className="flex flex-col items-start justify-center">
          <h4
            className={`  font-work-sans text-sm font-medium ${
              checked ? " line-through text-gray-300" : "text-gray-900"
            }`}
          >
            Meeting with stakeholder
          </h4>
          <span
            className={` ${
              checked ? " line-through text-gray-300" : "text-gray-600"
            } font-work-sans text-sm font-normal`}
          >
            2:15 pm - 4:30 pm
          </span>
        </div>
      </div>
      <span className="text-gray-600 font-work-sans text-sm font-normal">
        Today
      </span>
    </div>
  );
};

export default TaskCard;
