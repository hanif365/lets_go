// BookTicket.js
"use client";

import React, { useEffect, useState } from "react";
import PassengerDetails from "@/components/BookTicketComponent/PassengerDetails/PassengerDetails";
import FareDetails from "@/components/BookTicketComponent/FareDetails/FareDetails";
import BookingInfo from "@/components/BookTicketComponent/BookingInfo/BookingInfo";
import upcomingEventsData from "../../../data/UpcomingEventsData.json";
import JourneyDetails from "@/components/BookTicketComponent/JourneyDetails/JourneyDetails";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BookTicket = ({ params }) => {
  const session = useSession();
  const router = useRouter();
  const userData = session?.data?.user;
  // console.log(
  //   "session: **********************************************: ",
  //   userData
  // );

  const [allReservedSeatIds, setAllReservedSeatIds] = useState([]);

  // console.log("allReservedSeatIds: ******: ", allReservedSeatIds);

  // Filter the data based on the eventLocation
  const filteredEvents = upcomingEventsData.filter(
    (event) => event.eventLocationLink === params?.bookLocation[0]
  );

  // console.log(
  //   "FilterEvents: -------------------------------: ",
  //   filteredEvents[0].busId
  // );

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch("/api/buytickets");
        const data = await response.json();

        const eventBus = data.filter((order) => {
          return order.eventData.busId === filteredEvents[0].busId;
        });

        // console.log("eventBus: ++++++++++++++++++++++++: ", eventBus); // here we get which event we are already booking

        const reservedAndPaidSeatIds = [];

        for (const order of eventBus) {
          if (order.paid === true) {
            for (const bookedSeat of order.bookedSeats) {
              reservedAndPaidSeatIds.push(bookedSeat.id);
            }
          }
        }

        setAllReservedSeatIds(reservedAndPaidSeatIds);

        const updatedSeatsData = initialSeatsData.map((seat) => ({
          ...seat,
          isReserved: reservedAndPaidSeatIds.includes(seat.id),
        }));

        setSeatsData(updatedSeatsData);
      } catch (error) {
        // console.error("Error fetching orders:", error);
      }
    }

    fetchOrders();
  }, []);

  //

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

  // console.log(params);

  const totalSeats = 40; // Total number of seats on the bus
  const seatsPerRow = 4; // Number of seats in each row

  const rows = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letters for rows

  const initialSeatsData = Array.from({ length: totalSeats }, (_, index) => {
    const seatNumber = index + 1;
    const isReserved = allReservedSeatIds.includes(seatNumber);
    return {
      id: seatNumber,
      name: `${rows[Math.floor(index / seatsPerRow)]}${
        (index % seatsPerRow) + 1
      }`,
      isBooked: false,
      isReserved: isReserved, // Check if the seat is reserved
    };
  });

  const [seatsData, setSeatsData] = useState(initialSeatsData);

  // console.log("initialSeatsData: ", initialSeatsData);
  // console.log("SeatsData: ", seatsData);

  const selectedSeatNames = selectedSeats.map(
    (seatId) => seatsData.find((seat) => seat.id === seatId)?.name
  );

  // console.log(seatsData);

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
                isReserved={seat.isReserved}
                onClick={() => handleSeatClick(seat.id)}
                reservedSeatCount={allReservedSeatIds.length}
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
    // console.log("Booked Seats:", bookedSeats);

    const orderedData = {
      filteredEvents: filteredEvents,
      bookedSeats: bookedSeats,
      passengers: passengerData,
      user: userData,
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
      // console.error("Error making POST request:", error);
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
    return passengerData.map((passenger, index) => {
      const isCompleted =
        passenger.name && passenger.gender && passenger.passengerType;
      return (
        <PassengerDetails
          key={index}
          passenger={passenger}
          onChange={(updatedPassenger) =>
            handlePassengerChange(index, updatedPassenger)
          }
          passengerNumber={index + 1}
          seatName={passenger.seatName}
          completed={isCompleted}
        />
      );
    });
  };

  const clearAllSelectedSeats = () => {
    setSelectedSeats([]);
    setPassengerData([]);
    setSeatsData((prevSeats) =>
      prevSeats.map((seat) => ({
        ...seat,
        isBooked: false,
      }))
    );
    setAdultCount(0);
    setChildCount(0);
  };

  if (session.status === "loading") {
    return (
      <div className="mt-40">
        <Image
          src="/loading.gif"
          alt="Loading Image"
          width={30}
          height={30}
          className="mx-auto"
        />
      </div>
    );
  }

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  const remaining_seats = totalSeats - allReservedSeatIds?.length;

  if (session.status === "authenticated") {
    // const remaining seats = {totalSeats} - {allReservedSeatIds.length}
    return (
      <div>
        <div className="flex flex-col-reverse md:flex-row mt-40">
          <div className="flex-1 mt-10 md:mt-0">
            <div className="flex justify-center">
              <p className="mr-14">Total Seats: {totalSeats}</p>
              <p>Remaining Seats: {remaining_seats}</p>
            </div>

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

            {selectedSeatNames.length > 0 && (
              <button
                type="submit"
                className={`text-[16px] lg:text-[18px] w-80 mx-auto flex justify-center items-center px-14 py-6 relative border uppercase font-semibold tracking-wider leading-none overflow-hidden  rounded-md text-white`}
                onClick={clearAllSelectedSeats}
              >
                <span className="absolute inset-0 bg-red-500 rounded"></span>
                <span className="absolute inset-0 flex justify-center items-center font-bold">
                  Reset Seats
                </span>
              </button>
            )}
          </div>
          <div className="flex-1 mx-auto">
            <JourneyDetails
              filteredEvents={filteredEvents}
              selectedSeatNames={selectedSeatNames}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-10 md:mx-10">
          <div className="flex-1 mx-6 md:mx-auto">{renderPassengerForms()}</div>
          <div className="flex-1 mx-auto mt-10 md:mt-0">
            <FareDetails
              adultCount={adultCount}
              childCount={childCount}
              filteredEvents={filteredEvents}
              onConfirmSeats={confirmSeats}
              passengerData={passengerData}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default BookTicket;
