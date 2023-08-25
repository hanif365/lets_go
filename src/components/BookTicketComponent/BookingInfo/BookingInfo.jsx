import React from "react";

const BookingInfo = ({ seatName, isBooked, isReserved, onClick }) => {
  const seatColor = isReserved
    ? "bg-red-400"
    : isBooked
    ? "bg-gray-400"
    : "bg-blue-200";
  const cursor = isReserved ? "not-allowed" : isBooked ? "default" : "pointer";

  return (
    <div
      className={`m-1 w-16 h-16 flex items-center justify-center cursor-${cursor} ${seatColor}`}
      onClick={!isReserved ? onClick : null}
    >
      {seatName}
    </div>
  );
};

export default BookingInfo;
