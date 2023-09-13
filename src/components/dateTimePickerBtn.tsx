import { GoCalendar, GoClock } from "react-icons/go";
import Calendar from "./calender";
import { useState, useEffect } from "react";
import { addMonths, format } from "date-fns";
import TimePicker from "./time";

type Props = {
  type: "date" | "time";
  name: string;
  onChange: (value: any) => void;
};

const DateTimePickerBtn = ({ type, name, onChange }: Props) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(currentMonth);
  const [selected, setSelected] = useState<Date | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (time: Date) => {
    setSelectedTime(time);
  };

  const handlePrevMonth = (day: Date) => {
    setCurrentMonth(addMonths(day, -1));
    setSelected(addMonths(day, -1));
  };

  const handleNextMonth = (day: Date) => {
    setCurrentMonth(addMonths(day, 1));
    setSelected(addMonths(day, 1));
  };

  const handleDateClick = (day: Date) => {
    const selectedDayMonth = day.getMonth();
    const activeMonth = currentMonth.getMonth();

    if (activeMonth === selectedDayMonth) {
      setSelectedDate(day);
      setSelected(day);
    } else if (activeMonth > selectedDayMonth) {
      handlePrevMonth(addMonths(day, +1));
    } else {
      handleNextMonth(addMonths(day, -1));
    }
  };

  useEffect(() => {
    setShow(false);
    type === "date" && onChange(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    type === "time" && onChange(selectedTime);
  }, [selectedTime]);
  return (
    <div className="relative w-fit" title={name}>
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="w-[110px] h-10 px-2 py-2.5 bg-white rounded-lg relative shadow border border-gray-300 justify-start items-center gap-2 inline-flex cursor-pointer"
      >
        <div className=" relative">
          {type === "date" ? (
            <GoCalendar size={18} aria-label="Select date" />
          ) : (
            <GoClock size={18} aria-label="Select time" />
          )}
        </div>
        <div className="text-gray-500 text-[12px] font-semibold leading-tight">
          {type === "date"
            ? format(selected ? selected : currentMonth, "yyyy-MM-dd")
            : selectedTime.toLocaleTimeString()}
        </div>
      </button>
      {type === "date" && show && (
        <div className="absolute left-0">
          <Calendar
            selectedDate={selectedDate}
            currentMonth={currentMonth}
            setSelectedDate={setSelectedDate}
            handleDateClick={handleDateClick}
            handleNextMonth={handleNextMonth}
            handlePrevMonth={handlePrevMonth}
          />
        </div>
      )}
      {type === "time" && show && (
        <div className="absolute right-0 z-10">
          <TimePicker selectedTime={selectedTime} onChange={handleTimeChange} />
        </div>
      )}
    </div>
  );
};

export default DateTimePickerBtn;
