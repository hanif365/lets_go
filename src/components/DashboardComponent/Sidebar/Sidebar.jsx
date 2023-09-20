"use client";

import React, { useContext } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
  PiUsersFourLight,
} from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { FcHome } from "react-icons/fc";
import { GlobalContext } from "@/context";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <LuLayoutDashboard size={25} />,
  },
  {
    id: "mybooking",
    label: "My Booking",
    path: "/dashboard/mybooking",
    icon: <TbBrandProducthunt size={25} />,
  },
  {
    id: "wishlist",
    label: "Wishlist",
    path: "/dashboard/wishlist",
    icon: <PiUsersFourLight size={25} />,
  },
];

const Sidebar = () => {
  const { isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar } = useContext(GlobalContext);
  const { status } = useSession();

  const pathName = usePathname();
  console.log(pathName);
  const router = useRouter();

  const getLastWord = (path) => {
    const pathParts = path.split("/");
    return pathParts[pathParts.length - 1];
  };

  const currentPath = getLastWord(pathName);

  console.log(currentPath);

  const handlenavigate = (getMenuItem) => {
    // if (status === "unauthenticated") {
    //   router.push("/login");
    //   return;
    // }
    router.push(getMenuItem.path);
  };

  return (
    <aside
      className={`min-h-screen border-r bg-white ease-linear duration-300 ${
        isSidebarCollapsed ? "w-24" : "w-72"
      }`}
    >
      <div className="flex justify-end pt-3 px-3 space-x-3">
        <Link href="/">
          <FcHome
            className="self-center"
            style={{ width: "20px", height: "20px" }}
          />
        </Link>
        <button onClick={toggleSidebar}>
          {isSidebarCollapsed ? (
            <PiArrowFatLinesRightFill
              className="text-[#17286136]"
              style={{ width: "20px", height: "20px" }}
            />
          ) : (
            <PiArrowFatLinesLeftFill
              className="text-[#172861a6]"
              style={{ width: "20px", height: "20px" }}
            />
          )}
        </button>
      </div>
      {/*  */}
      <div className="flex pb-7 px-6 pt-8">
        <Image
          src="/hanif.jpg"
          alt="Profile Photo"
          width={1000}
          height={1000}
          className="w-[50px] h-[50px] rounded-xl"
        />
        <div
          className={`self-center ${isSidebarCollapsed ? "hidden" : ""} pl-5`}
        >
          <h4 className="text-base lg:text-lg 2xl:text-2xl font-bold">
            M.A.Hanif
          </h4>
          <p className="text-sm 2xl:text-base">Pabna, Bangladesh</p>
        </div>
      </div>
      <hr />
      {/*  */}

      <div className="flex flex-col duration-300 ease-linear">
        <nav className="mt-3 py-4 px-4 lg:mt-5 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <div
                    onClick={() => handlenavigate(menuItem)}
                    className={`group  cursor-pointer flex items-center gap-2.5 rounded-lg py-3 font-medium duration-300 ease-in-out ${
                      isSidebarCollapsed ? "px-0" : "px-4"
                    }
                             ${
                               currentPath.includes(menuItem.id)
                                 ? "bg-[#172861] text-white"
                                 : "hover:bg-[#17286136]"
                             }
                            `}
                  >
                    {/* {menuItem.icon} */}
                    <div
                      className={`${
                        isSidebarCollapsed
                          ? "w-full flex justify-center items-center"
                          : ""
                      } `}
                    >
                      {menuItem.icon}
                    </div>
                    <p className={`${isSidebarCollapsed ? "hidden" : ""}`}>
                      {menuItem.label}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div></div>
    </aside>
  );
};

export default Sidebar;
