import Orders from "@/models/Orders";
import connectDB from "@/utils/db";

export const POST = async (request) => {
  const url = new URL(request.url);
  console.log(url);
  const searchParams = new URLSearchParams(url.search);
  const transactionId = searchParams.get("transactionId"); // Retrieves the value of the 'transactionId' parameter

  console.log(transactionId);

  await connectDB();

  // show eror if transaction id not present
  if (!transactionId) {
    const errorMsg =
      "Transaction not complete, Something went wrong! Please try again later.";

    const redirectFailPageURL = `${process.env.SITE_URL}/fail?transactionId=${transactionId}&errorMsg=${errorMsg}`;
    console.log(redirectFailPageURL);

    return new Response(null, {
      status: 302, // Found/Temporary Redirect
      headers: {
        Location: redirectFailPageURL,
      },
    });
  }

  const result = await Orders.deleteOne({ transactionId });
  if (result.deletedCount) {
    const errorMsg =
      "Transaction Aborted, Something went wrong! Please try again later.";

    const redirectFailPageURL = `${process.env.SITE_URL}/fail?transactionId=${transactionId}&errorMsg=${errorMsg}`;
    console.log(redirectFailPageURL);

    return new Response(null, {
      status: 302, // Found/Temporary Redirect
      headers: {
        Location: redirectFailPageURL,
      },
    });
  }
};
