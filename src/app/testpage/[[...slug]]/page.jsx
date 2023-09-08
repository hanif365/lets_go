// pages/dashboard/[link].js
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/components/DashboardComponent/DashboardLayout/DashboardLayout";
import BookingHistory from "@/components/DashboardComponent/BookingHistory/BookingHistory";

const DynamicLinkPage = ({ params }) => {
  // console.log(params?.slug[0]);
  const path = params?.slug? params?.slug[0] : '/';

  // Render content based on the "link" route parameter
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

  return (
    <DashboardLayout>
      <div className="mt-40">
        <div className="flex-1 p-6">{content}</div>
      </div>
    </DashboardLayout>
  );
};

export default DynamicLinkPage;
