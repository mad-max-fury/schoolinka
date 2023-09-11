import { useUser } from "../lib/reactQuery/auth/useUser";
import CButton from "./button";
import { AiOutlinePlus } from "react-icons/ai";
type Props = {
  greeting: string;
  taskHighlight: string;
  createTask: () => void;
};

const Welcome = ({ greeting, taskHighlight, createTask }: Props) => {
  const user = useUser();
  const name = user?.user?.user_metadata?.full_name?.split(" ")[0];
  return (
    <div className="w-full h-fit flex justify-between items-start mt-[48px] mb-[32px]">
      <Greetings
        greeting={greeting + ` ${name}`}
        taskHighlight={taskHighlight}
      />
      <span className="hidden xs:block">
        <CButton
          value={"Create New Task"}
          type="button"
          onClick={createTask}
          className="p-[10px_16px] flex-row-reverse  text-white hover:bg-secondary text-sm font-semibold bg-secondary-hover rounded-lg"
        >
          <span>
            <AiOutlinePlus size={20} />
          </span>
        </CButton>
      </span>
    </div>
  );
};

export default Welcome;

const Greetings = ({ greeting, taskHighlight }: Partial<Props>) => {
  return (
    <div className="w-full h-fit flex flex-col ">
      <h2 className="text-[clamp(24px,_5vw,_30px)] leading-none mb-[1px] text-gray-900 font-semibold">
        {greeting}
      </h2>
      <small className=" text-gray-600 text-base font-work-sans font-normal">
        {taskHighlight}
      </small>
    </div>
  );
};
