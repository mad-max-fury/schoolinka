import React from "react";
import CButton from "./button";

type Props = {
  greeting: string;
  taskHighlight: string;
  createTask: () => void;
};

const Welcome = ({ greeting, taskHighlight, createTask }: Props) => {
  return (
    <div className="w-full h-fit flex justify-between items-start">
      <Greetings greeting={greeting} taskHighlight={taskHighlight} />
      <span>
        <CButton
          value={"Create New Task"}
          type="button"
          onClick={createTask}
          className="p-[10px_16px] text-white hover:bg-secondary text-sm font-semibold bg-secondary-hover rounded-lg"
        />
      </span>
    </div>
  );
};

export default Welcome;

const Greetings = ({ greeting, taskHighlight }: Partial<Props>) => {
  return (
    <div className="w-full h-fit flex flex-col ">
      <h2 className="text-[clamp(24px,_5vw,_30px)] text-gray-900 font-semibold">
        {greeting}
      </h2>
      <small className=" text-gray-600 text-base font-work-sans font-normal">
        {taskHighlight}
      </small>
    </div>
  );
};
