import { format } from "date-fns";
import { generateCalendarData } from "../utils";
import CButton from "./button";

type Props = {
  selectedDate: Date;
  handleDateClick: (day: Date) => void;
};

const DatesLister = ({ selectedDate, handleDateClick }: Props) => {
  const calendarData = generateCalendarData(selectedDate);
  const calendarReduced = calendarData.reduce((acc, curr) => {
    return [...acc, ...curr];
  }, []);
  return (
    <div className="flex w-full flex-col sticky top-0">
      <h3 className=" font-work-sans text-base font font-semibold text-gray-900 ">
        {format(selectedDate, "MMMM yyyy")}
      </h3>
      <div className="py-2 w-full overflow-x-auto gap-4 flex hidescrollbar">
        {calendarReduced.map((date, i) => (
          <CButton
            key={i}
            value={format(date, "eee")}
            onClick={() => handleDateClick(date)}
            className={`  font-semibold
           hover:text-white rounded-lg min-w-[64px] hover:border-none border border-gray-300  flex-col gap-2 p-[10px_16px] hover:bg-secondary-hover ${
             format(selectedDate, "MMMM yyyy dd") ===
             format(date, "MMMM yyyy dd")
               ? "bg-secondary-hover text-white"
               : "bg-white text-gray-700"
           } shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]`}
          >
            <span>{date.getDate()}</span>
          </CButton>
        ))}
      </div>
    </div>
  );
};

export default DatesLister;
