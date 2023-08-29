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
      imageSrc: "https://i.ibb.co/NxnScBx/hakaluki-haor.jpg",
    },

    {
      imageSrc: "https://i.ibb.co/YdCxC4Z/Khagrachari7.jpg",
    },

    {
      imageSrc: "https://i.ibb.co/tmbyXFG/sajekvalley2.jpg",
    },

    {
      imageSrc: "https://i.ibb.co/NxVN0Ks/Khagrachari9.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/MNxxJdC/sajekvalley3.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/mTJ4pgg/cox-sbazargalleryimg1.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/1mzBx8d/sajekvalley8.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/d0Gwrd1/cox-sbazargalleryimg2.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/0rbr2Lc/mohamayalake1.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/8KkPyHD/bandarban1.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/ydQKMqd/mohamayalake.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/8KqzPqz/bandarban2.jpg",
    },
    {
      imageSrc: "https://i.ibb.co/wwWVNzx/niceplace.jpg",
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
          slidesToShow: 3,
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
              width={1000}
              height={1000}
              className="mx-auto w-full h-[8rem] md:h-[15rem] 2xl:h-[20rem] hover:mix-blend-overlay"
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
