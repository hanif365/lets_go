"use client";

import React from "react";
import { RiDashboardFill, RiSettings5Fill } from "react-icons/ri";
import { CgArrowsExchange } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FcHome } from "react-icons/fc";
import { useTheme } from "next-themes";
import {
  BsFillPersonCheckFill,
  BsFillPersonFill,
  BsMoon,
  BsSun,
} from "react-icons/bs";
import { useStateContext } from "@/context/ContextProvider";
import { FaHeart, FaPersonWalkingLuggage, FaStar } from "react-icons/fa6";

const Sidebar = () => {
  const { isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar } =
    useStateContext();
  const pathName = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard",
      icon: <RiDashboardFill size={25} />,
    },
    {
      id: "mybooking",
      label: "My Booking",
      path: "/dashboard/mybooking",
      icon: <FaPersonWalkingLuggage size={25} />,
    },
    {
      id: "profile",
      label: "Profile",
      path: "/dashboard/profile",
      icon: <BsFillPersonCheckFill size={25} />,
    },
    {
      id: "myreview",
      label: "My Review",
      path: "/dashboard/myreview",
      icon: <FaStar size={25} />,
    },
    {
      id: "wishlist",
      label: "Wishlist",
      path: "/dashboard/wishlist",
      icon: <FaHeart size={25} />,
    },
    {
      id: "setting",
      label: "Setting",
      path: "/dashboard/setting",
      icon: <RiSettings5Fill size={25} />,
    },
    {
      id: "divider",
      isDivider: true,
    },
    {
      id: "help",
      label: "Help",
      path: "/dashboard/help",
      icon: <BiHelpCircle size={25} />,
    },
    {
      id: "logout",
      label: "Log Out",
      path: "/dashboard/logout",
      icon: <MdLogout size={25} />,
    },
  ];

  const getLastWord = (path) => {
    const pathParts = path.split("/");
    return pathParts[pathParts.length - 1];
  };

  const currentPath = getLastWord(pathName);

  const handlenavigate = (getMenuItem) => {
    router.push(getMenuItem.path);
  };

  return (
    <aside
      className={`max-h-screen sticky top-0 overflow-y-auto dark:bg-[#1C1C25] dark:border-none bg-white ${
        isSidebarCollapsed ? "w-24" : "w-20 lg:w-72"
      }`}
    >
      {/* <div className="flex justify-end pt-3 px-2 space-x-3">
        <Link href="/">
          <FcHome
            className="self-center"
            style={{ width: "20px", height: "20px" }}
          />
        </Link>

        <div>
          <button
            className={`w-fit rounded-md hover:scale-110 active:scale-100`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? (
              <BsMoon
                className="dark:text-white text-[#17286136]"
                style={{ width: "20px", height: "20px" }}
              />
            ) : (
              <BsSun
                className="dark:text-white text-[#17286136]"
                style={{ width: "20px", height: "20px" }}
              />
            )}
          </button>
        </div>

        <button onClick={toggleSidebar} className="hidden md:block">
          {isSidebarCollapsed ? (
            <PiArrowFatLinesRightFill
              className="dark:text-white  text-[#17286136]"
              style={{ width: "20px", height: "20px" }}
            />
          ) : (
            <PiArrowFatLinesLeftFill
              className="dark:text-white  text-[#172861a6]"
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </button>
      </div> */}

      <Link href="/" className="flex pb-0 px-3 lg:px-6 pt-5">
        <Image
          src={
            isSidebarCollapsed
              ? "/logo.gif"
              : theme === "dark"
              ? "/logo.gif"
              : "/logo.gif"
          }
          alt="Profile Photo"
          width={120}
          height={120}
          className="mx-auto rounded-full hidden md:block cursor-pointer"
        />

        <Image
          src={
            isSidebarCollapsed
              ? "/logo.gif"
              : theme === "dark"
              ? "/logo.gif"
              : "/logo.gif"
          }
          alt="Profile Photo"
          width={60}
          height={60}
          className="rounded-xl block md:hidden cursor-pointer"
        />
      </Link>

      <div className="flex flex-col">
        <nav className="mt-3 py-4 px-4 lg:mt-3 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  {menuItem.isDivider ? (
                    <hr
                      className={`my-10 border-t-2 dark:border-[#ffffff1a] border-gray-200 ${
                        isSidebarCollapsed ? "mx-0" : "mx-0 lg:mx-5"
                      } `}
                    />
                  ) : (
                    <div
                      onClick={() => handlenavigate(menuItem)}
                      className={`group  cursor-pointer flex items-center gap-2.5 rounded-lg py-3 font-medium ${
                        isSidebarCollapsed ? "px-0" : "px-0 lg:px-8"
                      }
                             ${
                               currentPath.includes(menuItem.id)
                                 ? "dark:bg-[#062141] dark:text-[#0060FF] bg-[#D5E6FB] text-[#0060FF]"
                                 : "dark:hover:bg-[#0621413a] dark:hover:text-[#0062ffb9] hover:bg-[#d5e6fb62] hover:text-[#0062ffb9]"
                             }
                            `}
                    >
                      <div
                        className={`${
                          isSidebarCollapsed
                            ? // ? "w-full flex justify-center items-center"
                              "mx-auto"
                            : "mx-auto lg:mx-0"
                        } `}
                      >
                        {menuItem.icon}
                      </div>
                      <p
                        className={`${
                          isSidebarCollapsed ? "hidden" : "hidden lg:block"
                        } font-bold`}
                      >
                        {menuItem.label}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      {/* <div></div> */}
    </aside>
  );
};

export default Sidebar;
