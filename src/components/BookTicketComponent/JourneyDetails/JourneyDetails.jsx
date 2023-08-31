import React from "react";

const JourneyDetails = ({ filteredEvents, selectedSeatNames }) => {
  // console.log(
  //   "Gallllllll: *********************: ",
  //   filteredEvents[0]?.eventTitle
  // );
  // console.log("Heellllll: *********************: ", selectedSeatNames);

  return (
    <div className="md:w-[50%] mx-6 md:mx-auto">
      <div>
        <h4 className="text-xl">Journey Details</h4>
        <hr />
        <div>
          <p>Event Name: {filteredEvents[0]?.eventTitle}</p>
          <p>Date: {filteredEvents[0]?.date}</p>
          <p>Days: {filteredEvents[0]?.days}</p>
        </div>
        <hr />
        {selectedSeatNames.length > 0 && (
          <p>Seats: {selectedSeatNames.join(", ")}</p>
        )}
      </div>
    </div>
  );
};

export default JourneyDetails;
