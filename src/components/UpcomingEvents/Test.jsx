"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Test = () => {
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
    autoplaySpeed: 5000,
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
    <div className="mt-24 lg:mt-40" id="upcomingEvents">
      <p className="text-base text-center md:text-lg lg:text-xl">
        Check Our Best Promotional Tour
      </p>
      <h1 className="text-3xl text-center md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10">
        Upcoming Events
      </h1>
      <Slider {...settings}>
        {eventsData.map((event, index) => (
          <div key={index} className="py-10 md:py-20">
            <div className="relative ">
              <div className="relative group">
                <img src="/coxbazar.jpg" alt="Image" className="w-full h-96" />

                <div className="absolute mx-5 bottom-5 text-white group-hover:text-black text-left  transition-all duration-300  z-10">
                  {/*  */}
                  <p>{event.cost}</p>
                  <p className="text-2xl font-bold">{event.place}</p>
                  <div className="flex text-base my-3 font-bold">
                    <p className="">
                      {event.date}{" "}
                      <span className="ms-5 lg:ms-10">{event.days}</span>
                    </p>
                  </div>
                  {/* <p>Lorem ipsum dolor sit amet.</p> */}

                  {/*  */}
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

export default Test;
