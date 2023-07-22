import React from "react";
import "./HeroSection.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="text-black h-screen text-center">
      <div className="px-2 md:px-0">
        <h1 className="text-4xl leading-10 md:text-6xl md:leading-[4rem] lg:text-7xl lg:leading-[5rem] 2xl:text-8xl 2xl:leading-[8rem] font-extrabold mb-8">
          Lifelong memories just a <br /> few seconds away
        </h1>
        <p className="text-2xl">
          Let's start your journey with us, your dream will come true
        </p>

        <button
          className="explore_btn mt-12 px-10 py-6 relative border uppercase font-semibold tracking-wider leading-none overflow-hidden  bg-[#070B39] rounded-md text-white"
          type="button"
        >
          <span className="absolute inset-0 bg-yellow-400"></span>
          <span className="absolute inset-0 flex justify-center items-center font-bold">
            Explore Destinations
          </span>
          Explore Destinations
        </button>
      </div>

      <div className="h-screen bg-[url('/bg_hero.png')] bg-center bg-cover bg-no-repeat mt-[-120px] relative -z-10">
        <div className="animate-bus absolute right-20 bottom-36">
          <Image
            src="/bus.png"
            alt="Running bus"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
