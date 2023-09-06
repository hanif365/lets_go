"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";
import "./page.css";
import Link from "next/link";

const Page = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId");
  const errorMsg = searchParams.get("errorMsg");
  // console.log(transactionId);
  // console.log(errorMsg);

  return (
    <div className="mt-20 px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <Image
            src="/img_fail.png"
            alt="Fail Order Image"
            width={1500}
            height={1500}
            className="w-full"
          />
        </div>
        <div className="flex-1 self-center">
          <h4 className="text-xl lg:text-5xl 2xl:text-7xl font-bold">
            Awww... Don't Cry
          </h4>
          <p className="text-md lg:text-lg 2xl:text-2xl font-bold pt-5 text-red-500">
            {errorMsg}
          </p>

          <Link
            href={"/"}
            className="print:hidden text-[18px] lg:text-[22px] fail_page_btn w-full lg:w-3/5  flex justify-center items-center px-10 py-8 mt-10 relative border uppercase font-semibold tracking-wider leading-none overflow-hidden bg-green-400 rounded-md text-white cursor-pointer"
          >
            <span className="absolute inset-0 bg-green-500 rounded"></span>
            <span className="absolute inset-0 flex justify-center items-center font-bold">
              Try Again
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
