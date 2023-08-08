"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

const PhotoGallery = () => {
  const photoData = [
    {
      imageSrc: "https://i.ibb.co/cYygt9n/photo-gallery1.jpg",
    },

    {
      imageSrc: "https://i.ibb.co/L9z6qtw/photo-gallery2.jpg",
    },

    {
      imageSrc: "https://i.ibb.co/VSPHqSg/photo-gallery3.jpg",
    },

    {
      imageSrc: "https://i.ibb.co/0KdxwCF/photo-gallery4.jpg",
    },

    {
      imageSrc: "https://i.ibb.co/bNyPBxX/photo-gallery5.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/cYygt9n/photo-gallery1.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/L9z6qtw/photo-gallery2.jpg",
    },
  ];

  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    // pauseOnHover: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust padding to center the cards (60px for left and right showing)
    // lazyLoad: "ondemand",
    // variableWidth:true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className="mt-24 lg:mt-28 ">
      <Slider {...settings}>
        {photoData.map((data, index) => (
          <div key={index} className="relative group/photo  bg-slate-500">
            <Image
              src={data.imageSrc}
              alt="photo gallery"
              width={500}
              height={500}
              className="mx-auto w-full  hover:mix-blend-overlay"
            />
            <FaInstagram
              style={{ width: "50px", height: "50px", color: "#ffffff" }}
              className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2  invisible group-hover/photo:visible transition-all ease-in duration-300 translate-y-[-10px] group-hover/photo:translate-y-[0px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoGallery;
