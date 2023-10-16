import Image from "next/image";
import React from "react";

const BookingInfo = ({
  seatName,
  isBooked,
  isReserved,
  onClick,
  reservedSeatCount,
}) => {
  console.log(isReserved);
  const seatColor =
    isReserved === null || isReserved === true
      ? "bg-red-400"
      : isBooked
      ? "bg-gray-400"
      : "bg-blue-200";
  const cursor = isReserved ? "not-allowed" : isBooked ? "default" : "pointer";

  return (
    <div>
      {isReserved === null ? (
        <div
          className={`m-1 w-16 h-16 flex items-center justify-center bg-gray-50 animate-pulse`}
        ></div>
      ) : (
        <div
          className={`m-1 w-16 h-16 flex items-center justify-center cursor-${cursor} ${seatColor}`}
          onClick={!isReserved ? onClick : null}
        >
          {seatName}
        </div>
      )}
    </div>
  );
};
export default BookingInfo;
