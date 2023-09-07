import Calender from "./components/calender";
import DatesLister from "./components/datesLister";
import Navbar from "./components/navbar";
import Pagination from "./components/pagination";
import TaskCard from "./components/taskCard";
import TaskEditor from "./components/taskEditor";
// import TaskPreview from "./components/taskPreview";
import Welcome from "./components/welcome";

import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10; // Replace with the total number of pages in your dataset

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can also fetch data for the new page here if needed.
  };
  return (
    <div>
      <Navbar />

      <main className="max-w-[1276px] py-4 px-4 mx-auto relative ">
        <Welcome
          greeting="Good morning!"
          taskHighlight="You got some task to do."
          createTask={() => null}
        />
        <div className="w-full flex items-start justify-between min-h-[calc(100vh_-_160px)] h-screen max-h-[860px]  sticky top-[80px]">
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
                  <TaskCard key={i} />
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
          <div className="w-max-content ">
            {/* <TaskPreview /> */}
            {/* <TaskEditor /> */}
            <Calender />
          </div>
        </div>
      </main>
    </div>
  );
}
