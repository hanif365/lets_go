"use client";

import Image from "next/image";
import React from "react";
import "./AboutUs.css";
import { Link } from "react-scroll";

const AboutUs = () => {
  return (
    <div className="mt-24 lg:mt-40 lg:px-20 2xl:px-60">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1 p-10 lg:p-0">
          <Image
            src="/about_us.png"
            alt="about us Image"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>

        <div className="flex-1 self-center px-10 lg:px-20 lg:py-10 text-center lg:text-left">
          <p className="text-base md:text-lg lg:text-xl">About Us</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10">
            Get ready for real time adventure
          </h1>
          <p>
            Let's start your journey with us, your dream will come true. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud exercitation.
          </p>

          <div className="flex justify-center lg:justify-normal">
            <Link
              activeClass="active"
              to="upcomingEvents"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="text-[14px] lg:text-[16px] about_btn mt-12 px-10 py-6 relative border uppercase font-semibold tracking-wider leading-none overflow-hidden bg-yellow-400 rounded-md text-white cursor-pointer"
              type="button"
            >
              <span className="absolute inset-0 bg-[#070B39]"></span>
              <span className="absolute inset-0 flex justify-center items-center font-bold">
                Book Your Destination
              </span>
              Book Your Destination
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
