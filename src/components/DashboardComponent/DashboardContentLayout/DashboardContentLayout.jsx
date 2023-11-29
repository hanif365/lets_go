import React from "react";
import TravelStatus from "./TravelStatus/TravelStatus";
import BookingStaticsChart from "./BookingStatisticsChart/BookingStatisticsChart";

const DashboardContentLayout = () => {
  return <div className="p-3">
    <TravelStatus />
    <BookingStaticsChart />
  </div>;
};

export default DashboardContentLayout;
