import { HiOutlineCog } from "react-icons/hi";
import { LuBell } from "react-icons/lu";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className=" border-b border-solid sticky top-0 border-gray-200 bg-white z-40">
      <nav className="w-full max-w-[1276px]  h-[80px] flex items-center justify-between mx-auto  z-10 px-4">
        <h2 className=" font-bold text-xl hover:text-gray-400 pr-[clamp(5px,_4vw,_40px)] leading-none">
          ToDo
        </h2>
        <div className="flex items-center">
          <button className=" p-[10px] text-gray-500 bg-white hover:bg-gray-50 rounded-lg outline-none border-none mr-[4px]">
            <HiOutlineCog size={25} />
          </button>
          <button className=" p-[10px] text-gray-500 bg-white hover:bg-gray-50 rounded-lg outline-none border-none  mr-4">
            <LuBell size={25} />
          </button>
          <button className=" bg-white h-[40px] w-[40px] rounded-full outline-none border-none">
            <img
              src="https://avatars.githubusercontent.com/u/60670617?v=4"
              alt="my profile"
              className="h-full w-full rounded-full outline-none border-none"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
