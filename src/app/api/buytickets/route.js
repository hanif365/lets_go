import Orders from "@/models/Orders";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
const SSLCommerzPayment = require("sslcommerz-lts");

export const POST = async (request) => {
  const order = await request.json();
  const { cost, currency } = order[0];
  console.log(cost);

  await connectDB();

  const store_id = process.env.STORE_ID;
  const store_passwd = process.env.STORE_PASSWORD;
  const is_live = false;

  const transactionId =
    Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
  const data = {
    total_amount: cost,
    currency,
    tran_id: transactionId, // use unique tran_id for each api call
    success_url: `${process.env.SERVER_URL}/payment/success?transactionId=${transactionId}`,
    fail_url: `${process.env.SERVER_URL}/payment/fail?transactionId=${transactionId}`,
    cancel_url: `${process.env.SERVER_URL}/payment/cancel`,
    ipn_url: `${process.env.SERVER_URL}/ipn`,
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "order.customer",
    cus_email: "order.email",
    cus_add1: "order.address",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: "6670",
    ship_country: "Bangladesh",
  };

  try {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(data);

    // Redirect the user to payment gateway
    const GatewayPageURL = apiResponse.GatewayPageURL;
    console.log("API Response: ", GatewayPageURL);

    const newOrder = new Orders({
      transactionId,
      cost,
      paid: false,
    });

    await newOrder.save();

    return NextResponse.json(GatewayPageURL);
  } catch (err) {
    console.log("Error: ", err);
    return {
      status: 500,
      json: { error: `Failed because of ${err}` },
    };
  }
};
