import CButton from "./button";
import { FormProvider, useForm } from "react-hook-form";
import InputFieldTextArea from "./textarea";
import DateTimePickerBtn from "./dateTimePickerBtn";
import { useDisplay } from "../context/display";
import { useCreateTodo } from "../lib/reactQuery/task/useCreateTodo";
import { useUser } from "../lib/reactQuery/auth/useUser";
import { useState } from "react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import toast from "react-hot-toast";
const TaskEditor = () => {
  const { switchDisplayMethod } = useDisplay();
  const user = useUser();
  const [values, setValues] = useState<{
    user_id: string;
    task: string;
    start_time: string;
    end_time: string;
    due_date: Date;
    reminder: boolean;
  }>({
    user_id: user?.user?.id,
    task: "",
    start_time: "",
    end_time: "",
    due_date: new Date(),
    reminder: true,
  });
  const methods = useForm();
  const createTodoMutation = useCreateTodo();

  const createTask = async () => {
    if (values.task.length < 4)
      return toast.error("Todo title must be at least 4 characters long");
    await createTodoMutation.mutateAsync(values);
    if (createTodoMutation.isSuccess) switchDisplayMethod("calender");
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-[394px] min-h-64 px-6 py-5 flex-col justify-start items-start gap-4 inline-flex bg-white border border-solid border-gray-100 rounded-lg"
        style={{
          boxShadow:
            "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        }}
      >
        <div className="self-stretch justify-end items-start gap-2 inline-flex">
          <div className="w-full h-6 justify-between items-center flex ">
            <h3 className=" text-lg text-gray-900 font-work-sans font-bold">
              Edit Task
            </h3>
            <button
              type="button"
              className=" relative text-4xl leading-none mb-2 hover:text-gray-500"
              onClick={() => switchDisplayMethod("calender")}
            >
              &times;
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <InputFieldTextArea
            name="task"
            labelText="enter task"
            className="h-[150px]"
            placeholder="enter task "
            value={values.task}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, task: e.target.value }))
            }
          />
        </div>
        <div className="w-full flex auto justify-between flex-wrap">
          <DateTimePickerBtn
            type="date"
            name="dueDate"
            onChange={(value) =>
              setValues((prev) => ({ ...prev, due_date: value }))
            }
          />
          <span className="flex gap-2">
            <DateTimePickerBtn
              type="time"
              name="startTime"
              onChange={(value) =>
                setValues((prev) => ({
                  ...prev,
                  start_time: value?.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                  }),
                }))
              }
            />
            <DateTimePickerBtn
              type="time"
              name="endTime"
              onChange={(value) =>
                setValues((prev) => ({
                  ...prev,
                  end_time: value?.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                  }),
                }))
              }
            />
          </span>
        </div>
        {values.reminder && (
          <div className="flex my-1 w-full justify-between text-gray-500 font-medium text-base">
            <span className="flex items-center gap-2">
              <span className="text-xl font-bold">
                <HiOutlineBellAlert size={20} />
              </span>
              <span>10 Minute before</span>
            </span>
            <button
              type="button"
              className="text-xl"
              onClick={() =>
                setValues((prev) => ({ ...prev, reminder: false }))
              }
            >
              &times;
            </button>
          </div>
        )}
        <div className="flex-col justify-start items-start gap-[34px] flex">
          <div className="w-[337px] justify-start items-start gap-3 inline-flex">
            <CButton
              value={"Cancel"}
              type="button"
              onClick={() => switchDisplayMethod("calender")}
              className="grow shrink basis-0 h-[39px] px-[18px] py-2.5 text-slate-700 hover:bg-secondary-hover hover:text-white hover:border-transparent text-base font-semibold bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 flex"
            />
            <CButton
              value={"Save"}
              type="button"
              onClick={createTask}
              loading={createTodoMutation.isLoading}
              className="grow shrink basis-0 h-10 px-4 py-2.5 bg-blue-600 rounded-lg hover:opacity-90 shadow border border-blue-600 justify-center items-center gap-2 flex text-white text-sm font-semibold leading-tight"
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default TaskEditor;
