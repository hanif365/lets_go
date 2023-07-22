"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonials.css";
import Image from "next/image";

const Testimonials = () => {
  const peoplesData = [
    {
      name: "M.A.Hanif",
      designation: "CEO of Susastho",
      imageSrc: "/hanif.jpg",
      description:
        "When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time",
    },

    {
      name: "Abdur Rahman",
      designation: "CEO of Love",
      imageSrc: "/testimonials_people1.png",
      description:
        "When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time",
    },

    {
      name: "Abdullah",
      designation: "CEO of Happy",
      imageSrc: "/testimonials_people1.png",
      description:
        "When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time",
    },

    {
      name: "John Abraham",
      designation: "CEO of Joy",
      imageSrc: "/testimonials_people1.png",
      description:
        "When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time When it is your time",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    // speed means animation speed
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // swipeToSlide: true,
    fade: true,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust padding to center the cards (60px for left and right showing)
  };
  return (
    <div className='mt-24 lg:mt-40 text-center text-white py-16 lg:py-32 bg-[url("/bg_testimonials.jpg")] lg:bg-center bg-cover bg-no-repeat '>
      <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10 ">
        What Customers Say
      </h1>
      <div>
        <Slider {...settings}>
          {peoplesData.map((event, index) => (
            <div key={index} className="py-5 md:py-10">
              <div>
                <h3 className="text-2xl leading-10 px-5 lg:px-36 ">
                  " {event.description} "
                </h3>
                <div className="flex justify-center pt-5">
                  <Image
                    src={event.imageSrc}
                    alt="Faq Image"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                  <div className="pl-5 self-center  text-start">
                    <h5 className="font-bold text-xl">{event.name}</h5>
                    <h6>{event.designation}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
