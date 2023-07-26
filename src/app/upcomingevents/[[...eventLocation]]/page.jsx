"use client";

import React from "react";
import upcomingEventsData from "../../../data/UpcomingEventsData.json";
import Image from "next/image";
console.log(upcomingEventsData);

const page = ({ params }) => {
  console.log(params);

  // Filter the data based on the eventLocation
  const filteredEvents = upcomingEventsData.filter(
    (event) => event.eventLocationLink === params?.eventLocation[0]
  );
  console.log(filteredEvents[0].locationThumbnailImg);
  return (
    <div className=" relative text-center">
      <Image
        src={filteredEvents[0].locationThumbnailImg}
        alt="upcoming event Image"
        width={2000}
        height={2000}
        className="w-full h-[90vh]  lg:h-[100vh]"
        // className="w-full min-h-screen lg:max-h-screen"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-10 z-[1]">
        <h1 className="text-[#071952] text-2xl lg:text-8xl 2xl:text-9xl font-bold ">
          {filteredEvents[0].title}
        </h1>
        <p className="text-lg lg:text-2xl font-bold pt-10 text-[#071952]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          expedita!
        </p>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 opacity-60"></div>
    </div>
  );
};

export default page;
