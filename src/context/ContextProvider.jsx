"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { PropagateLoader, PulseLoader } from "react-spinners";

const StateContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [loader, setLoader] = useState(true);
  const { status } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") setLoader(true);
    if (
      status === "unauthenticated" &&
      pathName.includes("/dashboard" || "/visitors")
    ) {
      router.push("/login");
      setLoader(false);
    } else setLoader(false);
  }, [status]);

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

  return (
    <StateContext.Provider
      value={{ isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
