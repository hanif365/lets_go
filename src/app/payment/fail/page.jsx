"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId");
  const errorMsg = searchParams.get("errorMsg");
  // console.log(transactionId);
  // console.log(errorMsg);

  return (
    <div className="m-40 text-red-500">
      <p>{errorMsg}</p>
    </div>
  );
};

export default Page;
