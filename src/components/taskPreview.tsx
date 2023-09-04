import { FiCalendar } from "react-icons/fi";
import CButton from "./button";
import { LuClock } from "react-icons/lu";

type Props = {};

const TaskPreview = (props: Props) => {
  return (
    <div
      className="w-[394px] h-64 px-6 py-5 flex-col justify-start items-start gap-4 inline-flex bg-white border border-solid border-gray-100 rounded-lg"
      style={{
        boxShadow:
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
      }}
    >
      <div className="self-stretch justify-end items-start gap-2 inline-flex">
        <div className="w-6 h-6 justify-center items-center flex ">
          <button className=" relative text-4xl leading-none mb-2 hover:text-gray-500">
            &times;
          </button>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-[34px] flex">
        <div className="self-stretch h-[102px] flex-col justify-start items-start gap-8 flex">
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="text-gray-900 text-lg font-bold leading-snug">
              Create Wireframe
            </div>
          </div>
          <div className="self-stretch h-12 flex-col justify-start items-start gap-2 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="text-secondary">
                <FiCalendar size={25} />
              </div>
              <div className="text-neutral-800 text-base font-medium leading-tight">
                20th January, 2023
              </div>
            </div>
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="text-secondary">
                <LuClock size={25} />
              </div>
              <div className="text-neutral-800 text-base font-medium leading-tight">
                8:00 - 10:00 AM
              </div>
            </div>
          </div>
        </div>

        <div className="w-[337px] justify-start items-start gap-3 inline-flex">
          <CButton
            value={"Delete"}
            className="grow shrink basis-0 h-[39px] px-[18px] py-2.5 text-slate-700 hover:bg-red-400 hover:text-white hover:border-transparent text-base font-semibold bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 flex"
          />
          <CButton
            value={"Edit"}
            className="grow shrink basis-0 h-10 px-4 py-2.5 bg-blue-600 rounded-lg hover:opacity-90 shadow border border-blue-600 justify-center items-center gap-2 flex text-white text-sm font-semibold leading-tight"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskPreview;
