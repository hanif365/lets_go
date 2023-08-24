// BookTicket.js
"use client";

import React, { useState } from "react";
import PassengerDetails from "@/components/BookTicketComponent/PassengerDetails/PassengerDetails";
import FareDetails from "@/components/BookTicketComponent/FareDetails/FareDetails";
import BookingInfo from "@/components/BookTicketComponent/BookingInfo/BookingInfo";
import upcomingEventsData from "../../../data/UpcomingEventsData.json";
import JourneyDetails from "@/components/BookTicketComponent/JourneyDetails/JourneyDetails";

const BookTicket = ({ params }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerData, setPassengerData] = useState([]);

  const initialAdultCount = passengerData.filter(
    (passenger) => passenger.passengerType === "Adult"
  ).length;
  const initialChildCount = passengerData.filter(
    (passenger) => passenger.passengerType === "Child"
  ).length;

  const [adultCount, setAdultCount] = useState(initialAdultCount);
  const [childCount, setChildCount] = useState(initialChildCount);

  console.log(params);

  // Filter the data based on the eventLocation
  const filteredEvents = upcomingEventsData.filter(
    (event) => event.eventLocationLink === params?.bookLocation[0]
  );
  console.log(filteredEvents);

  const totalSeats = 40; // Total number of seats on the bus
  const seatsPerRow = 4; // Number of seats in each row

  const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letters for rows

  const initialSeatsData = Array.from({ length: totalSeats }, (_, index) => ({
    id: index + 1,
    name: `${rows[Math.floor(index / seatsPerRow)]}${
      (index % seatsPerRow) + 1
    }`,
    isBooked: false,
  }));

  const [seatsData, setSeatsData] = useState(initialSeatsData);

  const selectedSeatNames = selectedSeats.map(
    (seatId) => seatsData.find((seat) => seat.id === seatId)?.name
  );

  console.log(seatsData);

  const handleSeatClick = (seatId) => {
    const isSeatSelected = selectedSeats.includes(seatId);
    const updatedSelectedSeats = isSeatSelected
      ? selectedSeats.filter((id) => id !== seatId)
      : [...selectedSeats, seatId];

    setSelectedSeats(updatedSelectedSeats);

    const updatedPassengerData = updatedSelectedSeats.map((seatId) => {
      const existingPassenger = passengerData.find(
        (passenger) => passenger.seatId === seatId
      );

      const seatName = seatsData.find((seat) => seat.id === seatId)?.name || "";

      return (
        existingPassenger || {
          seatId,
          seatName,
          name: "",
          gender: "Male",
          passengerType: "Adult",
        }
      );
    });

    setPassengerData(updatedPassengerData);

    // Update seat booking status
    setSeatsData((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId ? { ...seat, isBooked: !seat.isBooked } : seat
      )
    );

    // Calculate counts based on updated passengerData
    const newAdultCount = updatedPassengerData.filter(
      (passenger) => passenger.passengerType === "Adult"
    ).length;
    const newChildCount = updatedPassengerData.filter(
      (passenger) => passenger.passengerType === "Child"
    ).length;

    setAdultCount(newAdultCount);
    setChildCount(newChildCount);
  };

  const renderSeatRow = (rowLetter, startSeatId) => {
    return (
      <div className="flex justify-center items-center my-2">
        {[0, 1, 2, 3].map((seatIndex) => {
          const seatNumber = startSeatId + seatIndex;
          const seat = seatsData[seatNumber - 1];
          return (
            <React.Fragment key={seat.id}>
              <BookingInfo
                seatName={seat.name}
                isBooked={seat.isBooked}
                onClick={() => handleSeatClick(seat.id)}
              />
              {seatIndex === 1 && <div className="w-10" />}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  const confirmSeats = async () => {
    const bookedSeats = seatsData.filter((seat) => seat.isBooked);
    console.log("Booked Seats:", bookedSeats);

    const orderedData = {
      filteredEvents: filteredEvents,
      bookedSeats: bookedSeats,
      passengers: passengerData, // Passengers data
    };

    console.log("Ordered Data: ******************:, ", orderedData);

    try {
      const response = await fetch("/api/buytickets", {
        method: "POST",
        body: JSON.stringify(orderedData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      // console.log(
      //   "Response Data: *****************************: ",
      //   responseData.url
      // );
      window.location.replace(responseData.url);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  const handlePassengerChange = (index, passenger) => {
    const updatedPassengers = [...passengerData];
    updatedPassengers[index] = passenger;
    setPassengerData(updatedPassengers);

    // Calculate counts based on current passengerData
    const newAdultCount = updatedPassengers.filter(
      (passenger) => passenger.passengerType === "Adult"
    ).length;
    const newChildCount = updatedPassengers.filter(
      (passenger) => passenger.passengerType === "Child"
    ).length;

    setAdultCount(newAdultCount);
    setChildCount(newChildCount);
  };

  const renderPassengerForms = () => {
    return passengerData.map((passenger, index) => (
      <PassengerDetails
        key={index}
        passenger={passenger}
        onChange={(updatedPassenger) =>
          handlePassengerChange(index, updatedPassenger)
        }
        passengerNumber={index + 1}
        seatName={passenger.seatName}
      />
    ));
  };

  return (
    <div>
      <div className="flex mt-40">
        <div className="flex-1">
          {renderSeatRow("A", 1)}
          {renderSeatRow("B", 5)}
          {renderSeatRow("C", 9)}
          {renderSeatRow("D", 13)}
          {renderSeatRow("E", 17)}
          {renderSeatRow("F", 21)}
          {renderSeatRow("G", 25)}
          {renderSeatRow("H", 29)}
          {renderSeatRow("I", 33)}
          {renderSeatRow("J", 37)}
        </div>
        <div className="flex-1">
          <JourneyDetails
            filteredEvents={filteredEvents}
            selectedSeatNames={selectedSeatNames}
          />
        </div>
      </div>

      <div className="flex mt-10">
        <div className="flex-1">{renderPassengerForms()}</div>
        <div className="flex-1">
          <FareDetails
            adultCount={adultCount}
            childCount={childCount}
            filteredEvents={filteredEvents}
            onConfirmSeats={confirmSeats}
          />
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
