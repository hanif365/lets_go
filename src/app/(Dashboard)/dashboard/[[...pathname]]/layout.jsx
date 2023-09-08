"use client";

import Sidebar from "@/components/DashboardComponent/Sidebar/Sidebar";
import React, { useContext } from "react";
import { GlobalContext } from "@/context";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard Content",
};

export default function DashboardLayout({ children }) {
  const { isSidebarCollapsed, setIsSidebarCollapsed } =
    useContext(GlobalContext);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  console.log(isSidebarCollapsed);
  return (
    <div className="flex bg-[#F5FAF8]">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed} />

      {/* Dashboard main content */}
      <main className={`flex-1 p-6 `}>
        <button onClick={toggleSidebar}>collapse</button>
        {children}
      </main>

      {/* <aside className={`w-80 bg-white border-l`}>
        <p>I am here</p>
      </aside> */}
    </div>
  );
}
