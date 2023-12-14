"use client";

import DashboardContentLayout from "@/components/DashboardComponent/DashboardContentLayout/DashboardContentLayout";
import DashboardHeader from "@/components/DashboardComponent/DashboardHeader/DashboardHeader";
import MyBookingContentLayout from "@/components/DashboardComponent/MyBookingContentLayout/MyBookingContentLayout";
import useStore from "@/store/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Dashboard = ({ params }) => {
  const {successfullOrders, setSuccessfullOrders} = useStore((state) => state)
  const path = params?.pathname ? params?.pathname[0] : "/";
  const session = useSession();
  const router = useRouter();

  // const [seatNames, setSeatNames] = useState([]);

  useEffect(() => {
    if (!session.data) return;

    // Once the session data is available, extract the user's email
    const email = session.data.user.email;
    const name = session.data.user.name;

    // Now that you have the email, you can proceed with your fetch request
    const fetchAllOrders = async () => {
      try {
        const response = await fetch("/api/buytickets");
        const data = await response.json();

        console.log("All Successfull Order Data: *******************: ", data);

        // Filter the data array for the orders with the matching email and paid status
        const matchedOrders = data.filter((order) => {
          return order.userData.email === email && order.paid === true;
        });

        // Extract seatNames for each matched order
        // const seatNamesByOrder = matchedOrders.map((order) => {
        //   return order.bookedSeats.map((seat) => seat.name);
        // });

        // Set the matched orders and seatNames (Here, matchedOrders means Successfull Orders)
        // await handleSuccessfullOrders(matchedOrders);
        console.log("Matched Orders: ", matchedOrders);
        await setSuccessfullOrders(matchedOrders);
        // setSeatNames(seatNamesByOrder);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchAllOrders();
  }, [session]);

  console.log("success_orders", successfullOrders);

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  let content = null;
  switch (path) {
    case "/":
      content = <DashboardContentLayout />;
      break;

    case "mybooking":
      content = <MyBookingContentLayout />;
      break;

    case "myprofile":
      content = (
        <>
          <h1 className="text-2xl font-semibold">profile Page</h1>
          <p>This is the content of Link 2 page.</p>
        </>
      );
      break;

    case "myreview":
      content = (
        <>
          <h1 className="text-2xl font-semibold">myreview Page</h1>
          <p>This is the content of Link 2 page.</p>
        </>
      );
      break;

    case "wishlist":
      content = (
        <>
          <h1 className="text-2xl font-semibold">wishlist Page</h1>
          <p>This is the content of Link 2 page.</p>
        </>
      );
      break;

    case "setting":
      content = (
        <>
          <h1 className="text-2xl font-semibold">setting Page</h1>
          <p>This is the content of Link 2 page.</p>
        </>
      );
      break;

    case "help":
      content = (
        <>
          <h1 className="text-2xl font-semibold">help Page</h1>
          <p>This is the content of Link 2 page.</p>
        </>
      );
      break;

    default:
      content = (
        <>
          <h1 className="text-2xl font-semibold">Dashboard Default page</h1>
          <p>(when route is /dashboard/123)</p>
        </>
      );
  }

  if (session.status === "authenticated") {
    return (
      <div className="">
        {/* <DashboardHeader /> */}
        <div className="">{content}</div>
      </div>
    );
  }
};

export default Dashboard;
