"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { PropagateLoader, PulseLoader } from "react-spinners";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
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
          color="#81d636"
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
    <GlobalContext.Provider
      value={{ isSidebarCollapsed, setIsSidebarCollapsed, toggleSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
