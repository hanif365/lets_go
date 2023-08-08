import Image from "next/image";
import React from "react";

const UPCHeroSection = ({ eventData }) => {
  return (
    <div>
      <div className=" relative text-center">
        <Image
          src={eventData[0].locationThumbnailImg}
          alt="upcoming event Image"
          width={2000}
          height={2000}
          className="w-full h-[90vh]  lg:h-[100vh]"
          // className="w-full min-h-screen lg:max-h-screen"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-10 z-[1]">
          <h1 className="text-[#071952] text-2xl lg:text-8xl 2xl:text-9xl font-bold ">
            {eventData[0].title}
          </h1>
          <p className="text-lg lg:text-2xl 2xl:text-4xl font-bold pt-10 text-[#071952]">
            {eventData[0].eventsMainDescription}
          </p>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 opacity-60"></div>
      </div>
    </div>
  );
};

export default UPCHeroSection;
