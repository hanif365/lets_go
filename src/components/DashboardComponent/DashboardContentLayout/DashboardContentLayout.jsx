import React from "react";
import TravelStatus from "./TravelStatus/TravelStatus";
import BookingStaticsChart from "./BookingStatisticsChart/BookingStatisticsChart";
import CostStatisticsChart from "./CostStatisticsChart/CostStatisticsChart";

const DashboardContentLayout = () => {
  return (
    <div className="p-3">
      <TravelStatus />

      <div className="flex flex-col lg:flex-row lg:space-x-3">
        <BookingStaticsChart />
        <CostStatisticsChart />
      </div>
    </div>
  );
};

export default DashboardContentLayout;
