import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong, FaTableCellsLarge } from "react-icons/fa6";

const DashboardLayout = ({ children, showNavbar }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  console.log(isSidebarCollapsed)

  return (
    <div className="flex bg-[#F5FAF8]">
      {/* Sidebar */}
      <div
        className={` bg-white border-r p-5 transition-all duration-500 ${
          isSidebarCollapsed ? "w-24" : "w-72"
        }`}
      >
        <div className="flex pb-7">
          <Image
            src="/hanif.jpg"
            alt="Profile Photo"
            width={1000}
            height={1000}
            className="w-[50px] h-[50px] rounded-xl"
          />
          <div className={`self-center ${isSidebarCollapsed ? "hidden" : ""} pl-5`}>
            <h4 className="text-base lg:text-lg 2xl:text-2xl font-bold">
              M.A.Hanif
            </h4>
            {/* <p className="text-sm 2xl:text-base">Pabna, Bangladesh</p> */}
          </div>
        </div>
        <hr />

        <div className="py-10 font-bold space-y-1">
          <div className="">
            <Link
              href="/dashboard/link1"
              className="block py-3 px-5 rounded-lg bg-blue-950 text-white"
            >
              <div className="flex space-x-3">
                <FaTableCellsLarge className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8" />
                <p className={`self-center ${isSidebarCollapsed ? "hidden" : ""}`}>
                  Dashboard
                </p>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              href="/dashboard/link2"
              className="block py-3 px-5 rounded-lg hover:bg-gray-100"
            >
              <div className="flex space-x-3">
                <FaTableCellsLarge className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8" />
                <p className={`self-center ${isSidebarCollapsed ? "hidden" : ""}`}>
                  My Booking
                </p>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              href="/dashboard/link2"
              className="block py-3 px-5 rounded-lg hover:bg-gray-100"
            >
              <div className="flex space-x-3">
                <FaTableCellsLarge className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8" />
                <p className={`self-center ${isSidebarCollapsed ? "hidden" : ""}`}>
                  My Reviews
                </p>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              href="/dashboard/link2"
              className="block py-3 px-5 rounded-lg hover:bg-gray-100"
            >
              <div className="flex space-x-3">
                <FaTableCellsLarge className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8" />
                <p className={`self-center ${isSidebarCollapsed ? "hidden" : ""}`}>
                  Wishlist
                </p>
              </div>
            </Link>
          </div>
          <div className="">
            <Link
              href="/dashboard/link2"
              className="block py-3 px-5 rounded-lg hover:bg-gray-100"
            >
              <div className="flex space-x-3">
                <FaTableCellsLarge className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8" />
                <p className={`self-center ${isSidebarCollapsed ? "hidden" : ""}`}>
                  Settings
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`flex-1 p-6 `}>
        <button onClick={toggleSidebar}>collapse</button>
        {children}
      </div>

      <div
        className={`w-80 bg-white border-l`}
      >
        <p>I am here</p>
      </div>
    </div>
  );
};

export default DashboardLayout;
