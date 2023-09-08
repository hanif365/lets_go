"use client";

import RootLayout from "@/app/layout";
import BookingHistory from "@/components/DashboardComponent/BookingHistory/BookingHistory";
import DashboardLayout from "@/components/DashboardComponent/DashboardLayout/DashboardLayout";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Dashboard = ({ params }) => {
  const path = params?.pathname ? params?.pathname[0] : "/";
  const session = useSession();
  const router = useRouter();
  const [successfulOrders, setSuccessfulOrders] = useState([]);
  // const [seatNames, setSeatNames] = useState([]);

  useEffect(() => {
    if (!session.data) return;

    // Once the session data is available, extract the user's email
    const email = session.data.user.email;
    const name = session.data.user.name;

    // Now that you have the email, you can proceed with your fetch request
    async function fetchAllOrders() {
      try {
        const response = await fetch("/api/buytickets");
        const data = await response.json();

        console.log("Success page Data: *******************: ", data);

        // Filter the data array for the orders with the matching email and paid status
        const matchedOrders = data.filter((order) => {
          return order.userData.email === email && order.paid === true;
        });

        // Extract seatNames for each matched order
        // const seatNamesByOrder = matchedOrders.map((order) => {
        //   return order.bookedSeats.map((seat) => seat.name);
        // });

        // Set the matched orders and seatNames
        setSuccessfulOrders(matchedOrders);
        // setSeatNames(seatNamesByOrder);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }

    fetchAllOrders();
  }, [session]);

  console.log(successfulOrders);
  // console.log(seatNames);

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  let content = null;
  switch (path) {
    case "/":
      content = (
        <>
          <h1 className="text-2xl font-semibold">Dashboard Page</h1>
          <p>This is the content of Dashboard page.</p>
        </>
      );
      break;
    case "link1":
      content = <BookingHistory />;
      break;
    case "link2":
      content = (
        <>
          <h1 className="text-2xl font-semibold">Link 2 Page</h1>
          <p>This is the content of Link 2 page.</p>
        </>
      );
      break;
    default:
      content = (
        <>
          <h1 className="text-2xl font-semibold">Dashboard Home</h1>
          <p>Welcome to the travel company dashboard!</p>
        </>
      );
  }

  if (session.status === "authenticated") {
    return (
        <DashboardLayout>
          <div className="">
            <Link href='/'>Home</Link>
            <p className="text-red-500">{content}</p>
          </div>
        </DashboardLayout>
    );
  }
};

export default Dashboard;
