import React, { useState } from "react";
import { parse, addMinutes, subMinutes } from "date-fns";

interface TimePickerProps {
  selectedTime: Date;
  onChange: (time: Date) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ selectedTime, onChange }) => {
  const [time, setTime] = useState(selectedTime);
  const [ampm, setAmPm] = useState(selectedTime.getHours() >= 12 ? "PM" : "AM");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const parsedTime = parse(value, "HH:mm", new Date());

    if (!isNaN(parsedTime.getTime())) {
      setTime(parsedTime);
      onChange(parsedTime);
    }
  };

  const handleAmPmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAmPm(value);
    const updatedTime = new Date(time);

    if (value === "PM" && updatedTime.getHours() < 12) {
      updatedTime.setHours(updatedTime.getHours() + 12);
    } else if (value === "AM" && updatedTime.getHours() >= 12) {
      updatedTime.setHours(updatedTime.getHours() - 12);
    }

    setTime(updatedTime);
    onChange(updatedTime);
  };

  const incrementTime = () => {
    const newTime = addMinutes(time, 5);
    setTime(newTime);
    onChange(newTime);
  };

  const decrementTime = () => {
    const newTime = subMinutes(time, 5);
    setTime(newTime);
    onChange(newTime);
  };

  return (
    <div className="flex items-center w-[200px] space-x-2 bg-white p-2 shadow-lg ">
      <button
        type="button"
        title="decrement by 5 seconds"
        className="px-2 py-1 bg-blue-500 text-white rounded-md"
        onClick={decrementTime}
      >
        -
      </button>
      <input
        type="text"
        value={time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}
        onChange={handleChange}
        className="px-2 py-1  w-full  rounded-md "
      />
      <button
        type="button"
        title="increment by 5 seconds"
        className="px-2 py-1 bg-blue-500 text-white rounded-md"
        onClick={incrementTime}
      >
        +
      </button>
      <div>
        <div className="flex items-center flex-col space-x-2">
          <input
            type="radio"
            id="am"
            name="ampm"
            value="AM"
            className="hidden"
            checked={ampm === "AM"}
            onChange={handleAmPmChange}
          />
          <label
            htmlFor="am"
            className={`${
              ampm === "AM" ? "text-secondary font-bold" : ""
            } text-xs cursor-pointer`}
          >
            AM
          </label>
          <input
            type="radio"
            id="pm"
            name="ampm"
            value="PM"
            checked={ampm === "PM"}
            className="hidden"
            onChange={handleAmPmChange}
          />
          <label
            htmlFor="pm"
            className={`${
              ampm === "PM" ? "text-secondary font-bold" : ""
            } text-xs cursor-pointer`}
          >
            PM
          </label>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
