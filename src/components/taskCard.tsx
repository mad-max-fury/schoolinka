import { useState } from "react";
import CheckBox from "./checkbox";
import { useDisplay } from "../context/display";
import { formatDistanceToNow, subMinutes } from "date-fns";
import { useUpdateTodo } from "../lib/reactQuery/task/useUpdateTodo";

type Props = {
  active: boolean;
  fn: () => void;
  id: string;
  task: string;
  start_time: string;
  end_time: string;
  done: boolean;
  created_at: string;
};

const TaskCard = ({
  fn,
  active,
  task,
  start_time,
  end_time,
  created_at,
  done,
  id,
}: Props) => {
  const updateTodo = useUpdateTodo();

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
          <CheckBox
            name="todo-1"
            checked={done}
            onChangeHandler={async (checked) => {
              await updateTodo.mutateAsync({
                id,
                column_name: "done",
                column_value: checked,
              });
            }}
          />
        </span>
        <div className="flex flex-col items-start justify-center">
          <h4
            className={`  font-work-sans text-sm font-medium ${
              done ? " line-through text-gray-300" : "text-gray-900"
            }`}
          >
            {task}
          </h4>
          <span
            className={` ${
              done ? " line-through text-gray-300" : "text-gray-600"
            } font-work-sans text-sm font-normal`}
          >
            {subMinutes(
              new Date(`1970-01-01T${start_time}Z`),
              60
            ).toLocaleTimeString([], {
              second: "2-digit",
              minute: "2-digit",
              hour: "2-digit",
              hour12: true,
            })}{" "}
            -{" "}
            {subMinutes(
              new Date(`1970-01-01T${end_time}Z`),
              60
            ).toLocaleTimeString([], {
              second: "2-digit",
              minute: "2-digit",
              hour: "2-digit",
              hour12: true,
            })}
          </span>
        </div>
      </div>
      <span className="text-gray-600 font-work-sans text-sm font-normal">
        {formatDistanceToNow(new Date(created_at), {
          addSuffix: true,
        })}
      </span>
    </div>
  );
};

export default TaskCard;
