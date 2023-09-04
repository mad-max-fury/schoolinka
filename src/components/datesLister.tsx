import CButton from "./button";

type Props = {
  month: string;
  dates: {
    day: string;
    date: string;
  }[];
};

const DatesLister = ({ month, dates }: Props) => {
  return (
    <div className="flex w-full flex-col sticky top-0">
      <h3 className=" font-work-sans text-base font font-semibold text-gray-900 ">
        {month}
      </h3>
      <div className="py-2 w-full overflow-x-auto gap-4 flex hidescrollbar">
        {dates.map(({ day, date }, i) => (
          <CButton
            key={i}
            value={day}
            className=" text-gray-700 font-semibold
           hover:text-white rounded-lg min-w-[64px] hover:border-none border border-gray-300 bg-white flex-col gap-2 p-[10px_16px] hover:bg-secondary-hover shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]"
          >
            <span>{date}</span>
          </CButton>
        ))}
      </div>
    </div>
  );
};

export default DatesLister;
