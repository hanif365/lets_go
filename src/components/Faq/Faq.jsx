"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa6";

const faqData = [
  {
    id: 1,
    title: "Title for Tab - 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. ...1",
  },
  {
    id: 2,
    title: "Title for Tab - 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. ...2",
  },
  {
    id: 3,
    title: "Title for Tab - 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. ...3",
  },
];

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (itemNo) => {
    setActiveAccordion((prevActive) => (prevActive === itemNo ? null : itemNo));
  };

  const isAccordionOpen = (itemNo) => {
    return itemNo === activeAccordion;
  };

  return (
    <div className="mt-24 lg:mt-40 lg:px-20 2xl:px-60">
      <div className="text-center pb-10">
        <p className="text-base md:text-lg lg:text-xl">FAQ</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mt-4 mb-10">
          Full range of travel service
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1">
          {/* Accordion start */}
          <div className="rounded overflow-hidden px-10 lg:px-20 lg:py-10">
            {/* Render accordion items dynamically */}
            {faqData.map((item) => (
              <div key={item.id}>
                <div
                  className={`group outline-none accordion-section `}
                  tabIndex="1"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="group flex justify-between px-4 py-6 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                    <div
                      className={`${
                        isAccordionOpen(item.id)
                          ? "text-[#7EA0FF] -rotate-180"
                          : "text-gray-500"
                      } h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 absolute left-0 `}
                    >
                      <FaCaretDown style={{ width: "40px", height: "40px" }} />
                    </div>
                    <div
                      className={`${
                        isAccordionOpen(item.id)
                          ? "text-[#7EA0FF]"
                          : "text-gray-500"
                      } font-bold uppercase transition ease duration-500 ml-8`}
                    >
                      {item.title}
                    </div>
                  </div>
                  <hr />
                  <div
                    className={`${
                      isAccordionOpen(item.id) ? "max-h-screen" : ""
                    }  max-h-0 px-4 overflow-hidden ease duration-500`}
                  >
                    <p className="p-2 text-black text-justify">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Accordion end */}
        </div>
        <div className="flex-1 p-10 lg:p-0">
          <Image
            src="/faq_img.png"
            alt="Faq Image"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
