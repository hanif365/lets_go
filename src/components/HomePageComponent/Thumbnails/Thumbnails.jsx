import Image from "next/image";
import React from "react";

const Thumbnails = () => {
  return (
    <div className="relative mx-5 mt-20 lg:mt-24">
      <div className="bg-[url('/bg_thumbnails.jpg')] bg-no-repeat bg-center h-[200px] lg:h-[600px] rounded-xl">
        <div className="flex justify-center items-center ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a href="https://www.youtube.com/embed/up68UAfH0d0">
              <Image
                src="/play_btn.svg"
                alt="Video Play Image"
                width={100}
                height={100}
                className="mx-auto w-1/2 lg:w-full"
              />
            </a>
            <h3 className="text-white text-center text-2xl lg:text-4xl absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
              Watch our last tour
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnails;
