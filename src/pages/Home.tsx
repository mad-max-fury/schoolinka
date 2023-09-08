import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { useDisplay } from "../context/display";
import { addMonths } from "date-fns";
import Navbar from "../components/navbar";
import Welcome from "../components/welcome";
import DatesLister from "../components/datesLister";
import TaskCard from "../components/taskCard";
import Pagination from "../components/pagination";
import TaskPreview from "../components/taskPreview";
import TaskEditor from "../components/taskEditor";
import Calendar from "../components/calender";

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(currentMonth);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    DisplayFlow: { calender, editor, preview },
    switchDisplayMethod,
  } = useDisplay();

  const isAbovelgScreen = useMediaQuery("(min-width:1200px)");
  const isSideWigetActive = true;
  const totalPages = 10;

  const handlePrevMonth = (day: Date) => {
    setCurrentMonth(addMonths(day, -1));
  };

  const handleNextMonth = (day: Date) => {
    setCurrentMonth(addMonths(day, 1));
  };

  const handleDateClick = (day: Date) => {
    const selectedDayMonth = day.getMonth();
    const activeMonth = currentMonth.getMonth();

    if (activeMonth === selectedDayMonth) {
      setSelectedDate(day);
    } else if (activeMonth > selectedDayMonth) {
      handlePrevMonth(addMonths(day, +1));
    } else {
      handleNextMonth(addMonths(day, -1));
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-[1276px] py-4 px-4 mx-auto relative">
        <Welcome
          greeting="Good morning!"
          taskHighlight="You got some task to do."
          createTask={() => switchDisplayMethod("editor")}
        />
        <div className="w-full flex items-start justify-between min-h-[calc(100vh-_160px)] h-screen max-h-[860px] gap-4 sticky top-[80px] overflow-x-hidden">
          <div className="w-full max-w-[832px] sm:pr-4 h-full flex flex-col sm:border-r sm:border-gray-200 sm:border-solid">
            <DatesLister
              selectedDate={selectedDate}
              handleDateClick={handleDateClick}
            />
            <div className="w-full flex gap-4 mt-6 flex-col h-[calc(100%-_60px)] overflow-y-auto hidescrollbar">
              <span className="my-3">
                <h1 className="text-base text-gray-900 font-semibold">
                  My Tasks
                </h1>
              </span>
              {Array(13)
                .fill(0)
                .map((_, i) => (
                  <TaskCard
                    key={i}
                    fn={() =>
                      i === selected ? setSelected(null) : setSelected(i)
                    }
                    active={i === selected}
                  />
                ))}
              <div className="container mx-auto my-2">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onChangePage={handlePageChange}
                />
              </div>
            </div>
          </div>
          <div
            className={
              isAbovelgScreen
                ? "w-full max-w-98"
                : `fixed bottom-0 z-20 shadow-md h-fit transition-all ease-in-out duration-300  w-screen ${
                    isSideWigetActive ? "right-0" : "right-[-100vw]"
                  }`
            }
          >
            {preview && <TaskPreview />}
            {editor && <TaskEditor />}
            {calender && (
              <Calendar
                selectedDate={selectedDate}
                currentMonth={currentMonth}
                setSelectedDate={setSelectedDate}
                handleDateClick={handleDateClick}
                handleNextMonth={handleNextMonth}
                handlePrevMonth={handlePrevMonth}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
