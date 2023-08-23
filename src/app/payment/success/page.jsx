"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId");
  const successMsg = searchParams.get("successMsg");
  console.log(transactionId);
  console.log(successMsg);

  return (
    <div className="m-40 text-green-500">
      <p>{transactionId}</p>
      <p>{successMsg}</p>
    </div>
  );
};

export default Page;
