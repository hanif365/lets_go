"use client";

import React from "react";
import upcomingEventsData from "../../../data/UpcomingEventsData.json";
import Image from "next/image";
import UPCHeroSection from "@/components/UpcomingPageComponent/UPCHeroSection/UPCHeroSection";
import EventsExplore from "@/components/UpcomingPageComponent/EventsExplore/EventsExplore";
// console.log(upcomingEventsData);

const page = ({ params }) => {
  console.log(params);

  // Filter the data based on the eventLocation
  const filteredEvents = upcomingEventsData.filter(
    (event) => event.eventLocationLink === params?.eventLocation[0]
  );
  // console.log(filteredEvents);
  return (
    <div>
      <UPCHeroSection eventData={filteredEvents} />
      <EventsExplore eventData={filteredEvents} />
    </div>
  );
};

export default page;
