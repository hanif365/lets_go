"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa6";
import "./Faq.css";
import { Link } from "react-scroll";

const faqData = [
  {
    id: 1,
    title: "Title for Tab - 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. ...1",
  },
  {
    id: 2,
    title: "Title for Tab - 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. ...2",
  },
  {
    id: 3,
    title: "Title for Tab - 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. ...3",
  },
];

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [isAnimationFast, setIsAnimationFast] = useState(false);

  const toggleAccordion = (itemNo) => {
    setActiveAccordion((prevActive) => (prevActive === itemNo ? null : itemNo));
  };

  const isAccordionOpen = (itemNo) => {
    return itemNo === activeAccordion;
  };

  const handleCircleClick = () => {
    setIsAnimationFast((prevIsFast) => !prevIsFast);
  };

  return (
    <div className="mt-24 lg:mt-40 lg:px-20 2xl:px-60">
      <div className="text-center pb-10">
        <p className="text-base md:text-lg lg:text-xl">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10">
          Full range of travel service
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex-1 self-center">
          {/* Accordion start */}
          <div className="rounded overflow-hidden px-10 lg:px-20 lg:py-10">
            {/* Render accordion items dynamically */}
            {faqData.map((item) => (
              <div key={item.id}>
                <div
                  className={`group outline-none accordion-section `}
                  tabIndex="1"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="group flex justify-between px-4 py-6 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                    <div
                      className={`${
                        isAccordionOpen(item.id)
                          ? "text-[#7EA0FF] -rotate-180"
                          : "text-gray-500"
                      } h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 absolute left-0 `}
                    >
                      <FaCaretDown style={{ width: "40px", height: "40px" }} />
                    </div>
                    <div
                      className={`${
                        isAccordionOpen(item.id)
                          ? "text-[#7EA0FF]"
                          : "text-gray-500"
                      } font-bold uppercase transition ease duration-500 ml-8`}
                    >
                      {item.title}
                    </div>
                  </div>
                  <hr />
                  <div
                    className={`${
                      isAccordionOpen(item.id) ? "max-h-screen" : ""
                    }  max-h-0 px-4 overflow-hidden ease duration-500`}
                  >
                    <p className="p-2 text-black text-justify">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Accordion end */}
        </div>

        <div className="flex-1 self-center pt-10 lg:p-0">
          {/* Circle code start */}
          <div className="circle_outer bg-[url('/bg_circle.png')] bg-cover">
            <div
              className="circle_inner"
              style={{
                animationDuration: isAnimationFast ? "3s" : "30s",
              }}
            >
              <div className="circle_inner-item -pos-1">
                <Image
                  src="/bus_logo.png"
                  alt="Bus Logo"
                  width={80}
                  height={80}
                  className="icon w-[50%] h-[50%] lg:w-[100%] lg:h-[100%]"
                />
              </div>
              <div className="circle_inner-item -pos-2">
                <Image
                  src="/train_logo.png"
                  alt="Train Logo"
                  width={80}
                  height={80}
                  className="icon w-[50%] h-[50%] lg:w-[100%] lg:h-[100%]"
                />
              </div>
              <div className="circle_inner-item -pos-3">
                <Image
                  src="/airplane_logo.png"
                  alt="Airplane Logo"
                  width={80}
                  height={80}
                  className="icon w-[50%] h-[50%] lg:w-[100%] lg:h-[100%]"
                />
              </div>
              <div className="circle_inner-item -pos-4">
                <Image
                  src="/car_logo.png"
                  alt="Car Logo"
                  width={80}
                  height={80}
                  className="icon w-[50%] h-[50%] lg:w-[100%] lg:h-[100%]"
                />
              </div>
              <div className="circle_inner-item -pos-5">
                <Image
                  src="/hotel_logo.png"
                  alt="Hotel Logo"
                  width={80}
                  height={80}
                  className="icon w-[50%] h-[50%] lg:w-[100%] lg:h-[100%]"
                />
              </div>

              <div className="circle_inner-item -pos-6">
                <Image
                  src="/bbq_logo.png"
                  alt="BBQ Logo"
                  width={80}
                  height={80}
                  className="icon w-[50%] h-[50%] lg:w-[100%] lg:h-[100%]"
                />
              </div>
              <div className="circle_inner-item -pos-7">
                <Image
                  src="/travel_bag.png"
                  alt="Travel Bag Logo"
                  width={80}
                  height={80}
                  className="icon w-[50%] h-[50%] lg:w-[100%] lg:h-[100%]"
                />
              </div>

              <div className="circle_inner-item -pos-8">
                <Image
                  src="/camping_logo.png"
                  alt="Camping Logo"
                  width={80}
                  height={80}
                  className="icon w-[50%] h-[50%] lg:w-[100%] lg:h-[100%]"
                />
              </div>
            </div>
            <div
              className="circle_middle_logo cursor-pointer"
              onClick={handleCircleClick}
            >
              <Image
                src="/logo.gif"
                alt="Logo"
                width={100}
                height={100}
                className={isAnimationFast && "animate-ping"}
              />
            </div>
          </div>
          {/* Circle code end */}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          // activeClassName="active"
          to="upcomingEvents"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          className="text-[14px] lg:text-[16px] faq_btn mt-12 px-10 py-6 relative border uppercase font-semibold tracking-wider leading-none overflow-hidden bg-yellow-400 rounded-md text-white cursor-pointer"
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
  );
};

export default Faq;
