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
    <div className="pb-[100rem]">
      <div>
        <Image
          src={filteredEvents[0].locationThumbnailImg}
          alt="upcoming event Image"
          width={2000}
          height={2000}
          className="w-full h-[40rem]  group-hover:opacity-70 transition-all duration-500"
        />
      </div>
      <p className="text-red-600">{filteredEvents[0].eventLocation}</p>
    </div>
  );
};

export default page;
