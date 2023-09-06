"use client";

import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./page.css";

const Page = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId");
  const successMsg = searchParams.get("successMsg");
  const [currentUserEmail, setCurrentUserEmail] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  const [successfulOrder, setSuccessfulOrder] = useState(null);
  const [seatNames, setSeatNames] = useState([]);

  const session = useSession();

  useEffect(() => {
    // Check if the session is loading
    if (!session.data) return;

    // Once the session data is available, extract the user's email
    const email = session.data.user.email;
    const name = session.data.user.name;
    setCurrentUserEmail(email);
    setCurrentUserName(name);

    // Now that you have the email, you can proceed with your fetch request
    async function fetchOrders() {
      try {
        const response = await fetch("/api/buytickets");
        const data = await response.json();

        console.log("Success page Data: *******************: ", data);

        // Filter the data array for the order with the matching transactionId
        const matchedOrder = data.find((order) => {
          return (
            order.userData.email === email &&
            order.transactionId === parseInt(transactionId)
          );
        });

        setSuccessfulOrder(matchedOrder); // Set the matched order

        if (matchedOrder) {
          const seatNames = matchedOrder.bookedSeats.map((seat) => seat.name);
          setSeatNames(seatNames);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetchOrders();
  }, [session]);

  console.log(successfulOrder);

  // function for format date
  let formattedDate = "";
  if (
    successfulOrder &&
    successfulOrder.eventData &&
    successfulOrder.eventData.eventDate
  ) {
    formattedDate = formatDate(successfulOrder.eventData.eventDate);
  }

  function formatDate(inputDate) {
    const dateObj = inputDate ? new Date(inputDate) : null;
    return dateObj instanceof Date && !isNaN(dateObj)
      ? dateObj
          .toLocaleDateString("en", { day: "numeric", month: "long" })
          .split(" ")
          .reverse()
          .join(" ")
      : "Invalid Date";
  }

  console.log(formattedDate);

  return (
    <div className="mt-40 px-6 lg:px-16">
      {successfulOrder === null ? (
        <p>Loading...</p>
      ) : successfulOrder ? (
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div>
              <h1 className="text-xl lg:text-4xl 2xl:text-6xl text-green-500 font-bold">
                Booking Confirmation
              </h1>
              <p className="text-base lg:text-xl 2xl:text-2xl font-bold pt-5">
                <span className="text-green-500 text-md lg:text-2xl 2xl:text-4xl">
                  {currentUserName},
                </span>{" "}
                Your booking has been confirmed!
              </p>
            </div>
            <div className="pt-10">
              <h4 className="pb-2">Booking Details</h4>
              <hr />
              <div className="flex justify-between py-5">
                <div>
                  <p>Order ID</p>
                  <hr />
                  <p className="pt-1">{transactionId}</p>
                </div>
                <div>
                  <p>Seat No</p>
                  <hr />
                  <p className="pt-1">{seatNames.join(", ")}</p>
                </div>
                <div>
                  <p>Event Cost</p>
                  <hr />
                  <p className="pt-1">
                    {successfulOrder.eventData.cost}{" "}
                    {successfulOrder.eventData.currency}
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <div className="pt-10">
              <h4 className="pb-2">Event Details</h4>
              <hr />
              <div className="py-5">
                <div className="flex justify-between">
                  <p>Event Name</p>
                  <p>{successfulOrder.eventData.eventTitle}</p>
                </div>
                <div className="flex justify-between pt-2">
                  <p>Venue</p>
                  <p>{successfulOrder.eventData.eventLocation}</p>
                </div>
                <div className="flex justify-between pt-2">
                  <p>Journey Start From</p>
                  <p>{successfulOrder.eventData.journeyStartFrom}</p>
                </div>
                <div className="flex justify-between py-2">
                  <p>Date and Time</p>
                  <p>
                    {successfulOrder.eventData.eventDate}{" "}
                    {successfulOrder.eventData.eventTime}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Days</p>
                  <p>{successfulOrder.eventData.eventDays}</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="pt-10">
              <h4 className="pb-2">User Details</h4>
              <hr />
              <div className="py-5">
                <div className="flex justify-between">
                  <p>Name</p>
                  <p>{successfulOrder.userData.name}</p>
                </div>
                <div className="flex justify-between pt-2">
                  <p>Email</p>
                  <p>{successfulOrder.userData.email}</p>
                </div>
                <div className="flex justify-between py-2">
                  <p>Phone Number</p>
                  <p>{successfulOrder.userData.phoneNumber}</p>
                </div>
                <div className="flex justify-between">
                  <p>Address</p>
                  <p>{successfulOrder.userData.address}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>

          {/* right side content */}
          <div className="flex-1 mt-20 lg:mt-0 print:hidden">
            {formattedDate ? (
              <div className="flex flex-col w-full lg:w-3/5 p-10 items-center justify-center text-center  rounded-2xl shadow-sm shadow-[#00000034] mx-auto bg-slate-50">
                <div>
                  <p className="text-4xl font-bold text-green-500">
                    {formattedDate.split(" ").map((part, index) => (
                      <span
                        key={index}
                        className={index === 0 ? "text-9xl" : "text-4xl"}
                      >
                        {part}
                        {index < formattedDate.split(" ").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <p className="pb-5 pt-2 text-base lg:text-xl 2xl:text-2xl font-bold">
                    {successfulOrder.eventData.eventDate}{" "}
                    {successfulOrder.eventData.eventTime}
                  </p>
                </div>
                <hr className="w-full mx-auto pb-5" />
                <p className="text-base lg:text-xl 2xl:text-2xl">Order ID</p>
                <h4 className="text-xl lg:text-2xl 2xl:text-4xl font-bold">
                  {transactionId}
                </h4>
              </div>
            ) : null}

            <button
              onClick={() => window.print()}
              className="print:hidden text-[18px] lg:text-[22px] success_page_btn w-full lg:w-3/5 mx-auto flex justify-center items-center px-10 py-8 mt-10 relative border uppercase font-semibold tracking-wider leading-none overflow-hidden bg-green-400 rounded-md text-white cursor-pointer"
            >
              <span className="absolute inset-0 bg-green-500 rounded"></span>
              <span className="absolute inset-0 flex justify-center items-center font-bold">
                Print Ticket
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-xl lg:text-4xl 2xl:text-6xl text-red-500 font-bold">
            Booking Error
          </h1>
          <p className="text-base lg:text-xl 2xl:text-2xl font-bold pt-5">
            {currentUserName} There was an error with your booking.
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
