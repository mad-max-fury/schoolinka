import React, { useEffect, useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  isSameMonth,
  isToday,
  isTomorrow,
  isYesterday,
  formatDistanceToNow,
} from "date-fns";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";

interface CalendarProps {}

const formatDateShort = (date: Date) => {
  const month = format(date, "MMM");
  const day = format(date, "d");
  const year = format(date, "yyyy");
  return `${month.slice(0, 3)} ${day}, ${year}`;
};

const Calendar: React.FC<CalendarProps> = (props) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(currentMonth);
  const handleDateClick = (day: Date) => {
    const selectedDayMonth = day.getMonth();
    const activeMonth = currentMonth.getMonth();

    if (activeMonth === selectedDayMonth) return setSelectedDate(day);
    if (activeMonth > selectedDayMonth) return handlePrevMonth(day);
    return handleNextMonth(day);
  };
  const generateCalendarData = () => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);
    const startDateOfWeek = startOfWeek(startDate);
    const endDateOfWeek = endOfWeek(endDate);

    const rows: Date[][] = [];

    let currentDate = startDateOfWeek;

    while (currentDate <= endDateOfWeek) {
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(currentDate);
        currentDate = addDays(currentDate, 1);
      }
      rows.push(week);
    }
    return rows;
  };

  const handlePrevMonth = (day: Date) => {
    return setCurrentMonth(addMonths(day, -1));
  };
  const handleNextMonth = (day: Date) => {
    return setCurrentMonth(addMonths(day, 1));
  };

  useEffect(() => {
    return setSelectedDate(currentMonth);
  }, [currentMonth]);
  const calendarData = generateCalendarData();
  return (
    <div
      className="Content max-w-96 w-full h-fit px-6 py-5 flex-col justify-start items-start gap-4 inline-flex bg-white border border-solid border-gray-100 rounded-lg"
      style={{
        boxShadow:
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
      }}
    >
      <div className="Calendar self-stretch h-fit flex-col justify-start items-start gap-3 flex">
        <div className="Month self-stretch justify-between items-center gap-14 inline-flex">
          <div
            className="Button p-2 rounded-lg hover:bg-gray-50 justify-center items-center gap-2 flex"
            onClick={() => handlePrevMonth(selectedDate)}
          >
            <button className="ChevronLeft w-5 h-5 relative text-gray-500">
              <LiaAngleLeftSolid size={20} />
            </button>
          </div>
          <div className="Text text-center text-slate-700 text-base font-semibold leading-normal">
            {format(currentMonth, "MMMM yyyy")}
          </div>
          <div
            className="Button p-2 rounded-lg justify-center hover:bg-gray-50 items-center gap-2 flex"
            onClick={() => handleNextMonth(selectedDate)}
          >
            <button className="ChevronRight w-5 h-5 relative text-gray-500">
              <LiaAngleRightSolid size={20} />
            </button>
          </div>
        </div>

        <div className="Actions self-stretch justify-start items-start gap-3 inline-flex">
          <div className="Input self-stretch px-3.5 py-2 min-w-fit bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
            <div className="Text grow shrink basis-0 text-gray-900 text-base font-normal leading-normal">
              {formatDateShort(selectedDate)}
            </div>
          </div>

          <div className="Button px-4 py-2.5 bg-white rounded-lg w-full shadow border border-gray-300 justify-center items-center gap-2 flex">
            <div className="Text text-slate-700 text-sm font-semibold leading-tight">
              {isYesterday(selectedDate)
                ? "Yesterday"
                : isToday(selectedDate)
                ? "Today"
                : isTomorrow(selectedDate)
                ? "Tomorrow"
                : formatDistanceToNow(selectedDate, {
                    addSuffix: true,
                  })}
            </div>
          </div>
        </div>

        <div className="Dates self-stretch h-fit flex-col justify-start items-start gap-1 flex">
          <div className="Day self-stretch justify-between items-start inline-flex">
            {["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"].map(
              (day, dayIndex) => (
                <div
                  key={dayIndex}
                  className="CalendarCell w-10 h-10 px-2 py-2.5 rounded-2xl justify-center items-center flex"
                >
                  {day}
                </div>
              )
            )}
          </div>
          {calendarData.map((week, rowIndex) => (
            <div
              key={rowIndex}
              className="Day self-stretch justify-between items-start inline-flex"
            >
              {week.map((day, dayIndex) => (
                <button
                  key={dayIndex}
                  className={`CalendarCell  w-10 h-10 px-2 py-2.5 rounded-full flex-col justify-end items-center gap-px inline-flex ${
                    selectedDate && isSameMonth(day, currentMonth)
                      ? selectedDate.getDate() === day.getDate()
                        ? "selected bg-blue-600 text-white"
                        : "text-slate-700 group pb-1 hover:bg-gray-100"
                      : "text-gray-500 group pb-1 hover:bg-gray-100"
                  }`}
                  onClick={() => handleDateClick(day)}
                >
                  <div className="Number w-6 text-center  text-sm font-normal leading-tight">
                    {day.getDate()}
                  </div>
                  <div className="Dot w-1 h-1 hidden group-hover:block bg-blue-600 rounded-full" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
