"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAlignLeft, FaBars, FaEquals, FaXmark } from "react-icons/fa6";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import Image from "next/image";

function Navbar() {
  const session = useSession();
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showShadow, setShowShadow] = useState(false);

  // console.log("User session: **********************************************: ", session?.data?.user);

  const changeBackgroundNavbar = () => {
    if (window.scrollY >= 800) {
      setShowNavbar(true);
      setShowShadow(true);
    } else if (window.scrollY <= 20) {
      setShowNavbar(true);
      setShowShadow(false);
    } else {
      setShowNavbar(false);
    }

    // console.log("showNavbar", showNavbar);
    // console.log("showShadow", showShadow);
    // console.log(window.scrollY);
  };

  useEffect(() => {
    // Add the event listener on the client-side only
    window.addEventListener("scroll", changeBackgroundNavbar);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", changeBackgroundNavbar);
    };
  }, []);

  return (
    <div>
      {/* <nav className={showNavbar ? 'navbar showNavbar navbar-expand-lg fixed-top navbar-light' : 'navbar navbar-expand-lg fixed-top navbar-light'} style={{ backgroundColor: navBg }}></nav> */}

      <nav
        className={`${
          showNavbar
            ? showShadow
              ? "md:translate-y-0 w-full bg-white  fixed top-0 left-0 right-0 z-10 shadow-md"
              : "translate-y-0 w-full bg-white md:bg-transparent  fixed top-0 left-0 right-0 z-10"
            : "w-full bg-white top-0 left-0 right-0 z-10 fixed md:-translate-y-full"
        }  transform transition-all duration-1000 `}
      >
        {/* <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10"> */}
        <div className="justify-between px-4 mx-auto lg:max-w-7xl 2xl:max-w-screen-2xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" onClick={() => {}}>
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    width={80}
                    height={80}
                    alt="logo"
                    className="h-16 animate-rocket"
                  />
                  <h1 className="text-black text-1xl hidden md:block  md:text-3xl font-extrabold ml-2">
                    <div className="loader">
                      <span>L</span>
                      <span>e</span>
                      <span>t'</span>
                      <span>s</span>
                      <span className="px-1"> </span>
                      <span>G</span>
                      <span>o</span>
                    </div>
                  </h1>
                </div>
              </Link>

              <div className="md:hidden">
                <button
                  className="text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar((prev) => !prev)}
                >
                  {navbar ? (
                    <FaXmark
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "red",
                      }}
                    />
                  ) : (
                    <FaEquals
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "#000000",
                      }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li
                  className={`text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-[#7EA0FF] transition duration-700 ease-in-out ${
                    pathname === "/" ? "text-[#7EA0FF]" : "text-[#00095E]"
                  }`}
                >
                  <Link
                    className={`${pathname === "/" ? "" : "underline_design"}`}
                    href="/"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    Home
                  </Link>
                </li>
                {/* <li
                  className={`text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-[#7EA0FF] transition duration-700 ease-in-out ${
                    pathname === "/about" ? "text-[#7EA0FF]" : "text-[#00095E]"
                  }`}
                >
                  <Link
                    className={`${
                      pathname === "/about" ? "" : "underline_design"
                    }`}
                    href="/about"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    About
                  </Link>
                </li> */}
                {/* <li
                  className={`text-xl font-bold py-2 px-6 text-center border-b-2 md:border-b-0 hover:text-[#7EA0FF] transition duration-700 ease-in-out ${
                    pathname === "/blogs" ? "text-[#7EA0FF]" : "text-[#00095E]"
                  }`}
                >
                  <Link
                    className={`${
                      pathname === "/blogs" ? "" : "underline_design"
                    }`}
                    href="/blogs"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    Blogs
                  </Link>
                </li> */}

                {/* new */}
                {session.status === "authenticated" && (
                  <li
                    className={`text-xl font-bold py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:text-[#7EA0FF] transition duration-700 ease-in-out ${
                      pathname === "/dashboard"
                        ? "text-[#7EA0FF]"
                        : "text-[#00095E]"
                    }`}
                  >
                    <Link
                      className={`${
                        pathname === "/dashboard" ? "" : "underline_design"
                      }`}
                      href="/dashboard"
                      onClick={() => {
                        setNavbar((prev) => !prev);
                      }}
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

                {/* new Login*/}
                {session.status === "authenticated" ? (
                  <li
                    className={`text-xl text-black font-bold py-2 px-6 text-center border-b-2 md:border-b-0 transition duration-700 ease-in-out`}
                  >
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => signOut()}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li
                    className={`text-xl  font-bold py-2 px-6 text-center border-b-2 md:border-b-0 transition duration-700 ease-in-out ${
                      pathname === "/login"
                        ? "text-green-600"
                        : "text-green-400"
                    }`}
                  >
                    <Link
                      href="/login"
                      onClick={() => {
                        setNavbar((prev) => !prev);
                      }}
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
