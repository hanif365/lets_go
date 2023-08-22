import { NextResponse } from "next/server";

export const POST = async (request) => {
  const url = new URL(request.url);
  console.log(url);
  const searchParams = new URLSearchParams(url.search);
  const transactionId = searchParams.get("transactionId"); // Retrieves the value of the 'transactionId' parameter

  console.log(transactionId);

  return NextResponse.json({ error: transactionId ? transactionId : "Someting went wrong!" });
};
