"use client";

import React from "react";
import upcomingEventsData from "../../../data/UpcomingEventsData.json";
import Image from "next/image";
import ReasonsToVisit from "@/components/UpcomingPageComponent/ReasonsToVisit/ReasonsToVisit";
import UPCHeroSection from "@/components/UpcomingPageComponent/UPCHeroSection/UPCHeroSection";
console.log(upcomingEventsData);

const page = ({ params }) => {
  console.log(params);

  // Filter the data based on the eventLocation
  const filteredEvents = upcomingEventsData.filter(
    (event) => event.eventLocationLink === params?.eventLocation[0]
  );
  // console.log(filteredEvents[0].locationThumbnailImg);
  return (
    <div>
      <UPCHeroSection eventData={filteredEvents} />
      <ReasonsToVisit eventData={filteredEvents} />
    </div>
  );
};

export default page;
