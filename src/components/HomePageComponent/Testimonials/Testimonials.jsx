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
        "Bangladesh's rich biodiversity, from its rare species to its verdant rainforests, is a testament to its status as a natural wonder",
    },

    {
      name: "Christopher",
      designation: "CEO of Love",
      imageSrc: "/Christopher.png",
      description:
        "Every corner of Bangladesh seems to hold a piece of paradise - its diverse ecosystems are a testament to its natural splendor",
    },

    {
      name: "Vladimir",
      designation: "CEO of Happy",
      imageSrc: "/Vladimir.png",
      description:
        "Nature enthusiasts, like myself, find solace in Bangladesh's serene backwaters and lush hills, a hidden gem of tranquility",
    },

    {
      name: "John Abraham",
      designation: "CEO of Joy",
      imageSrc: "/testimonials_people1.png",
      description:
        "The intricate network of rivers and the verdant landscapes make Bangladesh a true haven for those seeking unspoiled beauty",
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
    autoplaySpeed: 10000,
    // swipeToSlide: true,
    fade: true,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust padding to center the cards (60px for left and right showing)
  };
  return (
    // <div className='mt-24 lg:mt-40 text-center text-white py-16 lg:py-32 bg-[url("/bg_testimonials.jpg")] lg:bg-center bg-cover bg-no-repeat '>
    <div className='mt-24 lg:mt-40 text-center text-white py-16 lg:py-32 bg-[url("/bangladesh_flag1.png")] bg-center bg-cover bg-no-repeat bg-fixed'>
      <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10 ">
        What People Are Saying About Bangladesh
      </h1>
      <div>
        <Slider {...settings}>
          {peoplesData.map((people, index) => (
            <div key={index} className="py-5 md:py-10">
              <div>
                <h3 className="text-lg lg:text-2xl lg:leading-10 font-bold px-5 lg:px-36">
                  " {people.description} "
                </h3>
                <div className="flex justify-center pt-5">
                  <Image
                    src={people.imageSrc}
                    alt="Faq Image"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                  <div className="pl-5 self-center  text-start">
                    <h5 className="font-bold text-xl">{people.name}</h5>
                    <h6>{people.designation}</h6>
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
