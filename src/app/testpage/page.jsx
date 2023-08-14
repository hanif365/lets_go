"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import upcomingEventsData from "../../data/UpcomingEventsData.json";

const UpcomingEvents = () => {
  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    // pauseOnHover: false,
    speed: 500, // Animation speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Delay between each auto scroll (in milliseconds)
    swipeToSlide: true,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust padding to center the cards (60px for left and right showing)
  };

  return (
    <div className="mt-40 w-1/3">
      <Slider {...settings}>
        {upcomingEventsData.map((event, index) => (
          <div className="sm:w-1/2 md:w-2/5 h-full hidden md:flex flex-auto justify-center items-center  overflow-hidden text-white bg-no-repeat bg-cover relative rounded-br-2xl bg-gradient-to-r from-sky-500 to-indigo-400">
          {/* new code */}
          <div className="relative">
            <Image
              src={event.locationThumbnailImg}
              alt="upcoming event Image"
              width={2000}
              height={2000}
              className="w-full h-[155vh] 2xl:h-[125vh]"
            />
            
            {/* when Image show uncomment below line */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center px-10 z-[1]">
            {/* <div className="text-white flex flex-col  px-10 z-[1]"> */}
              <h1 className="text-2xl lg:text-5xl 2xl:text-7xl font-bold ">
                Glad to see you!
              </h1>
              <p className="text-lg lg:text-xl 2xl:text-2xl font-bold pt-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                saepe. Deserunt, quia facere. Vitae, inventore. Aliquam quos ut
                accusamus commodi.
                
              </p>
            </div>
            {/* when Image show uncomment below line */}
            <div className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 opacity-70"></div>
          </div>
          {/*  */}
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingEvents;
