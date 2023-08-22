import Orders from "@/models/Orders";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const url = new URL(request.url);
  console.log(url);
  const searchParams = new URLSearchParams(url.search);
  const transactionId = searchParams.get("transactionId"); // Retrieves the value of the 'transactionId' parameter

  console.log(transactionId);

  await connectDB();

  // show eror if transaction id not present
  if (!transactionId) {
    // return NextResponse.redirect(`${process.env.SITE_URL}/fail`);
    const errorMsg =
      "Transaction not complete, Something went wrong! Please try again later.";

    // const redirectFailPageURL = `${
    //   process.env.SITE_URL
    // }/fail?transactionId=${encodeURIComponent(
    //   transactionId
    // )}&errorMsg=${encodeURIComponent(errorMsg)}`;

    const redirectFailPageURL = `${process.env.SITE_URL}/fail?transactionId=${transactionId}&errorMsg=${errorMsg}`;
    console.log(redirectFailPageURL);

    return new Response(null, {
      status: 302, // Found/Temporary Redirect
      headers: {
        Location: redirectFailPageURL,
      },
    });
  }

  // for convert GMT+6 timezone
  const gmtOffset = 6 * 60 * 60 * 1000; // 6 hours offset in milliseconds
  const currentTime = new Date(); // Get the current time in your local timezone
  const gmtTime = new Date(currentTime.getTime() + gmtOffset);

  const updatedOrder = await Orders.findOneAndUpdate(
    { transactionId: transactionId, paid: false },
    { $set: { paid: true, paidAt: gmtTime } },
    { new: true }
  );

  console.log("Update Order: *************************: ", updatedOrder);

  if (!updatedOrder) {
    const errorMsg = "Order not found or already paid!";

    // const redirectFailPageURL = `${
    //   process.env.SITE_URL
    // }/fail?transactionId=${encodeURIComponent(
    //   transactionId
    // )}&errorMsg=${encodeURIComponent(errorMsg)}`;

    const redirectFailPageURL = `${process.env.SITE_URL}/fail?transactionId=${transactionId}&errorMsg=${errorMsg}`;
    console.log(redirectFailPageURL);

    return new Response(null, {
      status: 302, // Found/Temporary Redirect
      headers: {
        Location: redirectFailPageURL,
      },
    });
  }

//   const redirectSuccessPageURL = `${process.env.SITE_URL}/success?transactionId=${transactionId}`;
//   console.log(redirectSuccessPageURL);

  //   if (updatedOrder.paid) {
  // return NextResponse.json({ transactionId: transactionId });
  // return NextResponse.redirect(`${process.env.SITE_URL}/success?transactionId=${transactionId}`);
  // return NextResponse.redirect(redirectURL);

  // return NextResponse.redirect(new NextURL(request.nextUrl.pathname, redirectSuccessPageURL));
  //   }

  if (updatedOrder.paid) {
    // return new Response(null, {
    //   status: 302, // Found/Temporary Redirect
    //   headers: {
    //     Location: redirectSuccessPageURL,
    //   },
    // });

    const successMsg = "Transaction complete successfully!";

    // const redirectSuccessPageURL = `${
    //   process.env.SITE_URL
    // }/success?transactionId=${encodeURIComponent(
    //   transactionId
    // )}&successMsg=${encodeURIComponent(successMsg)}`;

    const redirectSuccessPageURL = `${process.env.SITE_URL}/success?transactionId=${transactionId}&successMsg=${successMsg}`;
    console.log(redirectSuccessPageURL);

    return new Response(null, {
      status: 302, // Found/Temporary Redirect
      headers: {
        Location: redirectSuccessPageURL,
      },
    });
  }
};
