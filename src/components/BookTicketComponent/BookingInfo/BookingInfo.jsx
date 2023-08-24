// BookingInfo.js
import React from 'react';

const BookingInfo = ({ seatName, isBooked, onClick }) => {
  const seatColor = isBooked ? 'bg-gray-400' : 'bg-blue-200';

  return (
    <div
      className={`m-1 w-16 h-16 flex items-center justify-center cursor-pointer ${seatColor}`}
      onClick={onClick}
    >
      {seatName}
    </div>
  );
};

export default BookingInfo;
