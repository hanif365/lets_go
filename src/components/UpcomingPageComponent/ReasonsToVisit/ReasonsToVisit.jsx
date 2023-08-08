import Image from "next/image";
import React from "react";

const ReasonsToVisit = ({ eventData }) => {
  return (
    <div>
      {/* {eventData[0].events.eventImage} */}
      {/* <h1 className="text-[#071952] text-2xl lg:text-8xl 2xl:text-9xl font-bold ">
        {eventData[0].title}
      </h1> */}
      <div class="min-h-screen bg-blue-500 py-6 flex flex-col justify-center sm:py-12">
        <div class="py-3 sm:max-w-6xl sm:mx-auto w-full px-2 sm:px-0">
          <div class="relative text-gray-700 antialiased text-sm font-semibold">
            {/* <!-- Vertical bar running through middle --> */}
            <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}

            {/* One set start */}
            {eventData[0]?.events[0] && (
              <div class="mt-16 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex flex-col sm:flex-row justify-start w-full mx-auto items-center space-y-2 lg:space-y-0">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <Image
                        src={eventData[0]?.events[0]?.eventImage}
                        alt="Event Photo"
                        width={1000}
                        height={1000}
                        className="rounded-md"
                      />
                    </div>
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-bold">
                          {eventData[0]?.events[0]?.eventName}
                        </h3>
                        <p className="text-sm">
                          {eventData[0]?.events[0]?.eventDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-12 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h4 className="text-xl text-white font-bold">1</h4>
                  </div>
                </div>
              </div>
            )}

            {/* new ****************************************************************************************** */}
            {eventData[0]?.events[1] && (
              <div class="mt-24 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex flex-col-reverse sm:flex-row justify-start w-full mx-auto items-center">
                    <div class="w-full sm:w-1/2 sm:pr-8 pt-2 lg:pt-0">
                      <div class="p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-bold">
                          {eventData[0]?.events[1]?.eventName}
                        </h3>
                        <p className="text-sm">
                          {eventData[0]?.events[1]?.eventDescription}
                        </p>
                      </div>
                    </div>

                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <Image
                        src={eventData[0]?.events[1]?.eventImage}
                        alt="Event Photo"
                        width={1000}
                        height={1000}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-12 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h4 className="text-xl text-white font-bold">2</h4>
                  </div>
                </div>
              </div>
            )}
            {/* One set End */}

            {/* Two set start */}
            {eventData[0]?.events[2] && (
              <div class="mt-24 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex flex-col sm:flex-row justify-start w-full mx-auto items-center space-y-2 lg:space-y-0">
                    <div class="w-full sm:w-1/2 sm:pr-8">
                      <Image
                        src={eventData[0]?.events[2]?.eventImage}
                        alt="Event Photo"
                        width={1000}
                        height={1000}
                        className="rounded-md"
                      />
                    </div>
                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <div class="p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-bold">
                          {eventData[0]?.events[2]?.eventName}
                        </h3>
                        <p className="text-sm">
                          {eventData[0]?.events[2]?.eventDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-12 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h4 className="text-xl text-white font-bold">3</h4>
                  </div>
                </div>
              </div>
            )}

            {/* new ****************************************************************************************** */}
            {eventData[0]?.events[3] && (
              <div class="mt-24 sm:mt-0 sm:mb-12">
                <div class="flex flex-col sm:flex-row items-center">
                  <div class="flex flex-col-reverse sm:flex-row justify-start w-full mx-auto items-center">
                    {/* text */}
                    <div class="w-full sm:w-1/2 sm:pr-8 pt-2 lg:pt-0">
                      <div class="p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-bold">
                          {eventData[0]?.events[3]?.eventName}
                        </h3>
                        <p className="text-sm">
                          {eventData[0]?.events[3]?.eventDescription}
                        </p>
                      </div>
                    </div>

                    <div class="w-full sm:w-1/2 sm:pl-8">
                      <Image
                        src={eventData[0]?.events[3]?.eventImage}
                        alt="Event Photo"
                        width={1000}
                        height={1000}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-12 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <h4 className="text-xl text-white font-bold">4</h4>
                  </div>
                </div>
              </div>
            )}
            {/* Two set End */}

            {/* ************************************************************************************************************************ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonsToVisit;
