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
    <div className="flex w-full flex-col">
      <h3 className=" font-work-sans text-base font font-semibold text-gray-900 ">
        {month}
      </h3>
      <div className="py-2 w-full overflow-x-auto gap-4 flex">
        {dates.map(({ day, date }, i) => (
          <CButton
            key={i}
            value={day}
            className=" text-gray-700 font-semibold
           hover:text-white rounded-lg min-w-[64px] border border-gray-300 bg-white flex-col gap-2 p-[10px_16px] hover:bg-secondary-hover"
          >
            <span>{date}</span>
          </CButton>
        ))}
      </div>
    </div>
  );
};

export default DatesLister;
