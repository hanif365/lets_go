"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaCaretDown } from "react-icons/fa6";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (itemNo) => {
    setActiveAccordion((prevActive) => (prevActive === itemNo ? null : itemNo));
  };

  const isAccordionOpen = (index) => {
    return index === activeAccordion;
  };

  return (
    <div className="mt-60 text-center lg:px-20 2xl:px-60">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1">
          {/* Accordion start */}
          <div className="">
            {/* below className e onek edid korsi */}
            <div className="rounded overflow-hidden px-10 lg:px-20 lg:py-10">
              {/* element 1 */}
              <div
                className={`group outline-none accordion-section `}
                tabIndex="1"
                onClick={() => toggleAccordion(1)}
              >
                <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                  <div
                    className={`${
                      isAccordionOpen(1)
                        ? "text-blue-500 -rotate-180"
                        : "text-gray-500"
                    } h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 absolute top-0 left-0 mb-auto ml-auto mt-2 mr-2`}
                  >
                    <FaCaretDown style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div
                    className={`${
                      isAccordionOpen(1) ? "text-blue-500" : "text-gray-500"
                    } font-bold transition ease duration-500 ml-6`}
                  >
                    Title for Tab - 1
                  </div>
                </div>
                <div
                  className={`${
                    isAccordionOpen(1) ? "max-h-screen" : ""
                  }  max-h-0 px-4 overflow-hidden ease duration-500`}
                >
                  <p className="p-2 text-black text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, repellat amet doloribus consequuntur eos similique
                    provident tempora voluptates iure quia fuga dicta
                    voluptatibus culpa mollitia recusandae delectus id suscipit
                    labore?
                  </p>
                </div>
              </div>
              <hr />

              {/* element 2 */}
              <div
                className={`group outline-none accordion-section `}
                tabIndex="1"
                onClick={() => toggleAccordion(2)}
              >
                <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                  <div
                    className={`${
                      isAccordionOpen(2)
                        ? "text-blue-500 -rotate-180"
                        : "text-gray-500"
                    } h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 absolute top-0 left-0 mb-auto ml-auto mt-2 mr-2`}
                  >
                    <FaCaretDown style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div
                    className={`${
                      isAccordionOpen(2) ? "text-blue-500" : "text-gray-500"
                    } font-bold transition ease duration-500 ml-6`}
                  >
                    Title for Tab - 2
                  </div>
                </div>
                <div
                  className={`${
                    isAccordionOpen(2) ? "max-h-screen" : ""
                  }  max-h-0 px-4 overflow-hidden ease duration-500`}
                >
                  <p className="p-2 text-black text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, repellat amet doloribus consequuntur eos similique
                    provident tempora voluptates iure quia fuga dicta
                    voluptatibus culpa mollitia recusandae delectus id suscipit
                    labore?
                  </p>
                </div>
              </div>
              <hr />
              {/* element 3 */}
              <div
                className={`group outline-none accordion-section `}
                tabIndex="1"
                onClick={() => toggleAccordion(3)}
              >
                <div className="group flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative">
                  <div
                    className={`${
                      isAccordionOpen(3)
                        ? "text-blue-500 -rotate-180"
                        : "text-gray-500"
                    } h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 absolute top-0 left-0 mb-auto ml-auto mt-2 mr-2`}
                  >
                    <FaCaretDown style={{ width: "40px", height: "40px" }} />
                  </div>
                  <div
                    className={`${
                      isAccordionOpen(3) ? "text-blue-500" : "text-gray-500"
                    } font-bold transition ease duration-500 ml-6`}
                  >
                    Title for Tab - 3
                  </div>
                </div>
                <div
                  className={`${
                    isAccordionOpen(3) ? "max-h-screen" : ""
                  }  max-h-0 px-4 overflow-hidden ease duration-500`}
                >
                  <p className="p-2 text-black text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat, repellat amet doloribus consequuntur eos similique
                    provident tempora voluptates iure quia fuga dicta
                    voluptatibus culpa mollitia recusandae delectus id suscipit
                    labore?
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
          {/* Accordion end */}
        </div>
        <div className="flex-1 p-10 lg:p-0">
          <Image
            src="/faq_img.png"
            alt="Running bus"
            width={600}
            height={600}
            className="mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
