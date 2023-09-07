import Calender from "./components/calender";
import DatesLister from "./components/datesLister";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";
import TaskCard from "./components/taskCard";
import TaskEditor from "./components/taskEditor";
import TaskPreview from "./components/taskPreview";
import Welcome from "./components/welcome";

import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { useDisplay } from "./context/display";

export default function App() {
  const isAbovelgScreen = useMediaQuery("(min-width:1200px)");
  const [selected, setSelected] = useState<number | null>(null);

  const {
    DisplayFlow: { calender, editor, preview },
    switchDisplayMethod,
  } = useDisplay();

  const isSideWigetActive = true;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Navbar />

      <main className="max-w-[1276px] py-4 px-4 mx-auto relative ">
        <Welcome
          greeting="Good morning!"
          taskHighlight="You got some task to do."
          createTask={() => switchDisplayMethod("editor")}
        />
        <div className="w-full flex items-start justify-between min-h-[calc(100vh_-_160px)] h-screen max-h-[860px] gap-4  sticky top-[80px] overflow-x-hidden">
          <div className="w-full max-w-[832px] sm:pr-4 h-full flex flex-col  sm:border-r sm:border-gray-200 sm:border-solid">
            <DatesLister
              month={"January 2023"}
              dates={[
                { day: "Mon", date: "1" },
                { day: "Tue", date: "2" },
                { day: "Wed", date: "3" },
                { day: "Thu", date: "4" },
                { day: "Fri", date: "5" },
                { day: "Sat", date: "6" },
                { day: "Sun", date: "7" },
                { day: "Mon", date: "1" },
                { day: "Tue", date: "2" },
                { day: "Wed", date: "3" },
                { day: "Thu", date: "4" },
                { day: "Fri", date: "5" },
                { day: "Sat", date: "6" },
                { day: "Sun", date: "7" },
                { day: "Mon", date: "1" },
                { day: "Tue", date: "2" },
                { day: "Wed", date: "3" },
                { day: "Thu", date: "4" },
                { day: "Fri", date: "5" },
                { day: "Sat", date: "6" },
                { day: "Sun", date: "7" },
              ]}
            />
            <div className="w-full flex gap-4 mt-6 flex-col h-[calc(100%_-_60px)] overflow-y-auto hidescrollbar">
              <span className="my-3">
                {" "}
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
            {calender && <Calender />}
          </div>
        </div>
      </main>
    </div>
  );
}
