import Image from "next/image";
import React from "react";
import { BsEye } from "react-icons/bs";

const TravelStatus = () => {
  const travelArray = [
    {
      id: 1,
      name: "Total Booking",
      icon: "/hanif.jpg",
      count: "20",
    },
    {
      id: 2,
      name: "Wishlist",
      icon: "/hanif.jpg",
      count: "5",
    },
    {
      id: 3,
      name: "Total Travel",
      icon: "/hanif.jpg",
      count: "15",
    },
    {
      id: 4,
      name: "Reviews",
      icon: "/hanif.jpg",
      count: "12",
    },
  ];

  return (
    <div className="space-y-5 md:flex md:space-x-3 md:space-y-0">
      {travelArray.map((travel, index) => (
        <div className="flex-1" key={index}>
          <div className="bg-white dark:bg-[#1C1C25] rounded-lg py-8 px-3 flex flex-col shadow-sm">
            <div className="text-center">
              <h5 className="text-lg">{travel?.name}</h5>
            </div>

            <div className="text-center pt-3">
              <h2 className={`text-lg lg:text-3xl 2xl:text-5xl font-bold`}>
                {travel?.count}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelStatus;
