"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { PropagateLoader, PulseLoader } from "react-spinners";

const StateContext = createContext(null);

const dashboardMenuInitialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const { status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [loader, setLoader] = useState(true);
  const [isDashboardHeaderMenuClicked, setIsDashboardHeaderMenuClicked] =
    useState(dashboardMenuInitialState);

  const [successfullOrders, setSuccessfulOrders] = useState([]);

  const handleSuccessfullOrders = (success_orders) => {
    setSuccessfulOrders(success_orders);
  };

  console.log(
    "Successfull ORders from Context: ******************: ",
    successfullOrders
  );

  useEffect(() => {
    if (status === "loading") setLoader(true);
    // Although we use middleware to protect our private route, but more security we also used below -
    // check (If we just use it without middleware private route pages shows for some seconds)
    // middleware is more secure to use
    if (
      status === "unauthenticated" &&
      (pathname.startsWith("/dashboard") || pathname.startsWith("/bookticket"))
    ) {
      router.push("/login");
      setLoader(false);
    } else setLoader(false);
  }, [status, pathname]);

  if (loader) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <PropagateLoader
          color="#D5E6FB"
          loading={loader}
          size={25}
          data-textid="Loader"
        />
      </div>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleDashboardHeaderMenuClick = (clicked) => {
    setIsDashboardHeaderMenuClicked({
      ...dashboardMenuInitialState,
      [clicked]: true,
    });
  };

  console.log(isDashboardHeaderMenuClicked);

  return (
    <StateContext.Provider
      value={{
        isSidebarCollapsed,
        setIsSidebarCollapsed,
        toggleSidebar,
        dashboardMenuInitialState,
        isDashboardHeaderMenuClicked,
        setIsDashboardHeaderMenuClicked,
        handleDashboardHeaderMenuClick,
        successfullOrders,
        handleSuccessfullOrders,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
