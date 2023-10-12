"use client"

import React from "react";
import "./Footer.css";
import Image from "next/image";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquarePinterest,
  FaSquareTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (!pathname.startsWith("/dashboard")) {
    return (
      <div className="mt-24 bg-[#172861] lg:px-20 2xl:px-60 pt-20 print:hidden">
        <div className="flex flex-col lg:flex-row ">
          {/* first part */}
          <div className="flex-auto lg:w-32 px-10 lg:px-0">
            <div className="flex">
              <Image
                src="/logo.gif"
                width={95}
                height={95}
                alt="logo"
                className="logo_footer"
              />
              {/* <h2 className="self-center text-3xl font-bold text-white">
              Let's Go
            </h2> */}
            </div>
            <p className="text-[#8A8FBE] py-8 lg:pr-10 leading-8">
              Land behold it created good saw after she'd Our set living. Signs
              midst
            </p>

            {/* social links */}
            <div className="flex space-x-5">
              <Link
                href="https://twitter.com/YOUR_TWITTER_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareTwitter
                  style={{ width: "25px", height: "25px" }}
                  className="cursor-pointer text-[#8A8FBE] hover:text-white transition-all ease-in-out duration-500"
                />
              </Link>
              <Link
                href="https://www.facebook.com/YOUR_FACEBOOK_PAGE_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareFacebook
                  style={{ width: "25px", height: "25px" }}
                  className="cursor-pointer text-[#8A8FBE] hover:text-white transition-all ease-in-out duration-500"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  style={{ width: "25px", height: "25px" }}
                  className="cursor-pointer text-[#8A8FBE] hover:text-white transition-all ease-in-out duration-500"
                />
              </Link>
              <Link
                href="https://www.pinterest.com/YOUR_PINTEREST_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquarePinterest
                  style={{ width: "25px", height: "25px" }}
                  className="cursor-pointer text-[#8A8FBE] hover:text-white transition-all ease-in-out duration-500"
                />
              </Link>
            </div>
          </div>

          {/* second part */}
          <div className="flex-1 p-10 lg:p-0">
            <h4 className="text-white text-lg font-bold pb-5">Navigation</h4>
            <ul className="text-[#8A8FBE] space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=2BnTYEafRQc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Video
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* third part */}
          <div className="flex-1 p-10 lg:p-0">
            <h4 className="text-white text-lg font-bold pb-5">Events</h4>
            <ul className="text-[#8A8FBE] space-y-4">
              <li>
                <Link
                  href={`/events/Cox'sBazar`}
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Cox's Bazar
                </Link>
              </li>
              <li>
                <Link
                  href={`/events/sajekvalley`}
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Sajek Valley
                </Link>
              </li>
              <li>
                <Link
                  href={`/events/sylhet`}
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Sylhet
                </Link>
              </li>
              <li>
                <Link
                  href={`/events/khagrachari`}
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Khagrachari
                </Link>
              </li>
              <li>
                <Link
                  href={`/events/bandarban`}
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Bandarban
                </Link>
              </li>
            </ul>
          </div>
          {/* fourth part */}
          <div className="flex-1 px-10 lg:px-0">
            <h4 className="text-white text-lg font-bold pb-5">Contact Us</h4>
            <ul className="text-[#8A8FBE] space-y-4">
              <li>
                <Link
                  href="/"
                  className="transition-all ease-out duration-300 pointer-events-none"
                >
                  Pabna, Rajshahi, Bangladesh
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all ease-out duration-300 pointer-events-none"
                >
                  abuhanif.cse3@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-yellow-400 transition-all ease-out duration-300 pointer-events-none"
                >
                  +88 01933412692
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-[#8A8FBE] text-sm text-center pt-20 pb-6 px-2">
          Copyright &copy;{new Date().getFullYear()} All rights reserved | Build
          by
          <Link
            href="https://hanif.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 pl-2"
          >
            M.A.Hanif
          </Link>
        </p>
      </div>
    );
  }
};

export default Footer;
