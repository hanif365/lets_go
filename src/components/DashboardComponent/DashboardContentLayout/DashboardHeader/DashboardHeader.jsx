import { useStateContext } from "@/context/ContextProvider";
import Image from "next/image";
import React from "react";
import { FaBars, FaChevronDown } from "react-icons/fa6";
import { LuBellDot } from "react-icons/lu";

const DashboardHeader = () => {
  const { isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar } =
    useStateContext();
  return (
    <div
      className={`p-4 flex justify-end md:justify-between dark:bg-[#1C1C25] bg-white `}
    >
      <div
        onClick={toggleSidebar}
        className="self-center hidden lg:block cursor-pointer rounded-full p-3 hover:bg-gray-50"
      >
        <FaBars size={25} />
      </div>

      <div className="self-center">
        <div className="flex ">
          <div className="self-center pr-6">
            <Image
              src="/message_notification_icon.png"
              alt="message_notification_icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </div>

          <div className="self-center pr-6">
            <LuBellDot
              className={`w-6 h-6 dark:text-[#ffffff] text-[#0060FF] cursor-pointer `}
            />
          </div>

          <div
            className={`flex justify-evenly cursor-pointer self-center hover:dark:bg-[#131313] hover:bg-gray-50 lg:py-2 lg:px-4 rounded-xl`}
          >
            <Image
              src="/hanif.jpg"
              alt="profile_photo icon"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="self-center pl-3 hidden lg:block">
              <h5 className="text-sm text-gray-400 whitespace-nowrap">
                Hi, <span className="font-bold">M.A.Hanif</span>
              </h5>
            </div>
            <div className="pl-2 self-center hidden lg:block">
              <FaChevronDown className="w-3 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
