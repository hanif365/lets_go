import { useStateContext } from "@/context/ContextProvider";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPersonCheckFill, BsShield } from "react-icons/bs";
import { FaPersonWalkingLuggage, FaStar } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";

const Notification = () => {
  const router = useRouter();
  const { setIsDashboardHeaderMenuClicked, dashboardMenuInitialState } =
    useStateContext();

  const userProfileData = [
    {
      icon: (
        <Image
          src="/hanif.jpg"
          alt="notification icon"
          width={40}
          height={40}
          className="rounded-full"
        />
      ),
      title: "Notification 1",
      desc: "Notification 1 Description",
    },
    {
      icon: (
        <Image
          src="/hanif.jpg"
          alt="notification icon"
          width={40}
          height={40}
          className="rounded-full"
        />
      ),
      title: "Notification 2",
      desc: "Notification 2 Description",
    },
    {
      icon: (
        <Image
          src="/hanif.jpg"
          alt="notification icon"
          width={40}
          height={40}
          className="rounded-full"
        />
      ),
      title: "Notification 3",
      desc: "Notification 3 Description",
    },
  ];

  return (
    <div className="absolute right-1 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Notification</p>
        <button
          className="p-3 cursor-pointer rounded-full hover:text-white hover:bg-red-400"
          type="button"
          onClick={() =>
            setIsDashboardHeaderMenuClicked(dashboardMenuInitialState)
          }
        >
          <TfiClose className="w-6 h-6 " />
        </button>
      </div>

      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b border-gray-100 p-4 hover:bg-gray-50 cursor-pointer dark:hover:bg-[#42464D]"
          >
            <div className=" text-xl rounded-lg p-3 self-center">
              {item.icon}
            </div>

            <div className="self-center">
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button
          className="text-xl text-white bg-blue-500 hover:bg-blue-600 py-3 w-full rounded-lg"
          // to set dashboardMenuInitialState means all state will be false
          onClick={() => {
            setIsDashboardHeaderMenuClicked(dashboardMenuInitialState);
            // need to show all notification component
          }}
        >
          See all notification
        </button>
      </div>
    </div>
  );
};

export default Notification;
