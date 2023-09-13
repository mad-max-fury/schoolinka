import { HiOutlineCog } from "react-icons/hi";
import { LuBell } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";

import CButton from "./button";
import { useState } from "react";
import { useSignOut } from "../lib/reactQuery/auth/useSignOut";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const signOut = useSignOut();

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
          <div className="flex relative ">
            <button
              className=" bg-white h-[40px] w-[40px] rounded-full outline-none border-none"
              onClick={() => setShow(!show)}
            >
              <img
                src="https://avatars.githubusercontent.com/u/60670617?v=4"
                alt="my profile"
                className="h-full w-full rounded-full outline-none border-none"
              />
            </button>
            <div
              className={`absolute w-[230px] h-fit right-0 transition-all ease-in duration-200 bg-white py-4 px-4 z-10 ${
                show ? "top-[60px] " : "top-[-100vh]"
              }`}
              style={{
                boxShadow:
                  "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
              }}
            >
              <CButton
                value={"Sign Out"}
                type="button"
                onClick={() => {
                  signOut.refetch();
                }}
                loading={signOut.isFetching}
                className="p-[10px_16px] flex-row-reverse w-full  text-white hover:bg-secondary text-sm font-semibold bg-secondary-hover rounded-lg"
              >
                <span>
                  <BiLogOut size={20} />
                </span>
              </CButton>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
