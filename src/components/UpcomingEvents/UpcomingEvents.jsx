"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  FaArrowRightLong,
  FaDollarSign,
  FaLocationArrow,
  FaLocationDot,
} from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import upcomingEventsData from "../../data/UpcomingEventsData.json";

const UpcomingEvents = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // pauseOnHover: false,
    speed: 500, // Animation speed in milliseconds
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Delay between each auto scroll (in milliseconds)
    swipeToSlide: true,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust padding to center the cards (60px for left and right showing)
    // lazyLoad: "ondemand",
    // centerMode: true,
    // centerPadding: '30px',
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-64 lg:mt-96" id="upcomingEvents">
      <p className="text-base text-center md:text-lg lg:text-xl">
        Check Our Best Promotional Tour
      </p>
      <h1 className="text-3xl text-center md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10">
        Upcoming Events
      </h1>
      <Slider {...settings}>
        {upcomingEventsData.map((event, index) => (
          <div key={index} className="py-5 lg:py-10">
            <div className="relative">
              <div className="relative group">
                {/* <img src="/coxbazar.jpg" alt="Image" className="w-full h-96" /> */}
                <Image
                  src={event.locationThumbnailImg}
                  alt="upcoming event Image"
                  width={1000}
                  height={1000}
                  className="w-full h-[20rem] 2xl:h-[24rem] group-hover:opacity-70 transition-all duration-500"
                />

                <div className="absolute px-5 bottom-5 text-white group-hover:text-black text-left transition-all duration-300 z-10 w-full">
                  <div className="flex space-x-2">
                    <FaDollarSign
                      className="self-center text-yellow-500 group-hover:text-green-500 transition-all duration-300"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <p className="self-center ">{event.cost}</p>
                  </div>
                  {/* <div className="flex space-x-36 2xl:space-x-48"> */}
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <FaLocationDot
                        className="self-center text-blue-500"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <p className="text-xl lg:text-2xl font-bold self-center">
                        {event.eventLocation}
                      </p>
                    </div>
                    <Link href={`/upcomingevents/${event.eventLocationLink}`}>
                      <FaArrowRightLong className="self-center text-yellow-500 invisible group-hover:visible cursor-pointer transition-all group-hover:delay-300 w-6 h-6 lg:w-10 lg:h-10" />
                      {/* <FaLocationArrow className="self-center text-yellow-500 invisible group-hover:visible cursor-pointer transition-all group-hover:delay-300 w-10 h-10 lg:w-14 lg:h-14" /> */}
                    </Link>
                  </div>
                  <div className="flex text-base  font-bold">
                    <div className="flex space-x-2">
                      <FaCalendarAlt
                        className="self-center text-red-500"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <p className="">
                        {event.date}
                        <span className="ms-5 lg:ms-10">{event.days}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-0 bg-white origin-bottom transition-all duration-500 group-hover:h-40 opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingEvents;
