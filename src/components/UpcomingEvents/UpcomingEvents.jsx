"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpcomingEvents = () => {
  const eventsData = [
    {
      imageSrc: "/coxbazar.jpg",
      place: "Cox Bazar",
      description:
        "When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time",
      date: "16 Dec - 19 Dec",
      days: "3 days",
      cost: "$ 300",
    },
    {
      imageSrc: "/saintmartin.jpg",
      place: "Saint Martin",
      description: "When it is your time",
      date: "16 Dec - 19 Dec",
      days: "3 days",
      cost: "$ 300",
    },
    {
      imageSrc: "/saintmartin.jpg",
      place: "Saint Martin",
      description: "When it is your time",
      date: "16 Dec - 19 Dec",
      days: "3 days",
      cost: "$ 300",
    },
    {
      imageSrc: "/saintmartin.jpg",
      place: "Saint Martin",
      description: "When it is your time",
      date: "16 Dec - 19 Dec",
      days: "3 days",
      cost: "$ 300",
    },
    {
      imageSrc: "/saintmartin.jpg",
      place: "Saint Martin",
      description: "When it is your time",
      date: "16 Dec - 19 Dec",
      days: "3 days",
      cost: "$ 300",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust padding to center the cards (60px for left and right showing)
    // lazyLoad: "ondemand",
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
    <div className="mt-64 lg:mt-96 text-center">
      <p className="text-base md:text-lg lg:text-xl">
        Check Our Best Promotional Tour
      </p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10">
        Upcoming Events
      </h1>
      <Slider {...settings}>
        {eventsData.map((event, index) => (
          <div key={index} className="py-10 md:py-20">
            {/* <div className="bg-[#1A2D6D] max-w-sm rounded-md shadow-lg mx-auto group/card"> */}
            <div className="bg-[#ebeaea60] max-w-sm rounded-md shadow-lg mx-auto group/card">
              {/* Add mx-auto to center the card */}
              <div className="flex justify-center items-center leading-none">
                <img
                  src={event.imageSrc}
                  alt="pic"
                  className="h-40 w-60 rounded-md shadow-2xl mt-6  transform -translate-y-12 transition duration-700"
                />
              </div>
              <div className="py-3 text-black font-bold">
                <div className="flex justify-around text-xl">
                  <p className="">{event.place}</p>
                  <p className="">{event.cost}</p>
                </div>
                <div className="flex mx-[3.4rem] text-xs my-3">
                  <p className="">
                    {event.date} <span className="ms-5">{event.days}</span>{" "}
                  </p>
                  {/* <p className="">{event.days}</p> */}
                </div>
                <div></div>
                {/* <p className="text-xs tracking-tighter mx-[2rem]">{event.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingEvents;
