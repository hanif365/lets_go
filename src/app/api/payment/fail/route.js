import Orders from "@/models/Orders";
import connectDB from "@/utils/db";

export const POST = async (request) => {
  const url = new URL(request.url);
  // console.log(url);
  const searchParams = new URLSearchParams(url.search);
  const transactionId = searchParams.get("transactionId"); // Retrieves the value of the 'transactionId' parameter

  // console.log(transactionId);

  await connectDB();

  // show eror if transaction id not present
  if (!transactionId) {
    const errorMsg =
      "Transaction not complete";

    const redirectFailPageURL = `${process.env.SITE_URL}/payment/fail?transactionId=${transactionId}&errorMsg=${errorMsg}`;
    // console.log(redirectFailPageURL);

    return new Response(null, {
      status: 302,
      headers: {
        Location: redirectFailPageURL,
      },
    });
  }

  const result = await Orders.deleteOne({ transactionId });
  if (result.deletedCount) {
    const errorMsg =
      "Transaction Aborted";

    const redirectFailPageURL = `${process.env.SITE_URL}/payment/fail?transactionId=${transactionId}&errorMsg=${errorMsg}`;
    // console.log(redirectFailPageURL);

    return new Response(null, {
      status: 302,
      headers: {
        Location: redirectFailPageURL,
      },
    });
  }
};
