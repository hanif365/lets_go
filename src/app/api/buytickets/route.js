import Orders from "@/models/Orders";
import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
const SSLCommerzPayment = require("sslcommerz-lts");

export const POST = async (request) => {
  const orderData = await request.json();
  console.log(
    "Ordered Data: ************************************************: ",
    orderData
  );
  const { filteredEvents, bookedSeats, passengers, user } = orderData;

  const eventID = filteredEvents[0].id;
  const eventLocation = filteredEvents[0].eventLocation;
  const eventImg = filteredEvents[0].locationThumbnailImg;
  const eventTitle = filteredEvents[0].eventTitle;
  const eventDate = filteredEvents[0].date;
  const eventTime = filteredEvents[0].time;
  const eventDays = filteredEvents[0].days;
  const journeyStartFrom = filteredEvents[0].journeyStartFrom;
  const busId = filteredEvents[0].busId;
  const cost = filteredEvents[0].cost;
  const currency = filteredEvents[0].currency;

  // const seatName = bookedSeats[0].name;
  // const isBooked = bookedSeats[0].isBooked;
  // const userName = user.name;
  // const userEmail = user.email;
  // console.log(
  //   cost,
  //   currency,
  //   eventLocation,
  //   isBooked,
  //   seatName,
  //   userName,
  //   userEmail,
  //   bookedSeats,
  //   eventID,
  //   busId
  // );

  const eventData = {
    eventID,
    eventTitle,
    eventDate,
    eventTime,
    eventDays,
    journeyStartFrom,
    eventLocation,
    eventImg,
    busId,
    cost,
    currency,
  };

  const userData = {
    name: user.name,
    email: user.email,
    phoneNumber: null,
    address: null,
  };

  // Perform a database query to fetch user details
  try {
    const userRecord = await User.findOne({ email: user.email });

    if (userRecord) {
      // If the user record exists, update userData with phoneNumber and address
      userData.phoneNumber = userRecord.phoneNumber;
      userData.address = userRecord.address;
    } else {
      console.error("User not found");
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
  //

  const bookedSeatDetails = bookedSeats.map((seat) => {
    const passenger = passengers.find(
      (passenger) =>
        passenger.seatId === seat.id && passenger.seatName === seat.name
    );

    return {
      id: seat.id,
      name: seat.name,
      isBooked: seat.isBooked,
      passengerName: passenger ? passenger.name : null,
      passengerGender: passenger ? passenger.gender : null,
      passengerType: passenger ? passenger.passengerType : null,
    };
  });

  // console.log(typeof cost, typeof currency);
  // console.log(process.env.SITE_URL);

  await connectDB();

  const store_id = process.env.STORE_ID;
  const store_passwd = process.env.STORE_PASSWORD;
  const is_live = false;

  const transactionId =
    Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
  const data = {
    total_amount: cost,
    currency: currency,
    tran_id: transactionId, // use unique tran_id for each api call
    success_url: `${process.env.SITE_URL}/api/payment/success?transactionId=${transactionId}`,
    fail_url: `${process.env.SITE_URL}/api/payment/fail?transactionId=${transactionId}`,
    cancel_url: `${process.env.SITE_URL}/api/payment/cancel?transactionId=${transactionId}`,
    // cancel_url: `${process.env.SITE_URL}/cancel`,
    ipn_url: `${process.env.SITE_URL}/ipn`,
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Hanif",
    cus_email: "abuhanif.cse3@gmail.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Rofiq",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: "1000",
    ship_country: "Bangladesh",
  };

  try {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(data);

    // Redirect the user to payment gateway
    const GatewayPageURL = apiResponse.GatewayPageURL;
    console.log("API Response: ", GatewayPageURL);

    const newOrder = new Orders({
      userData,
      eventData,
      bookedSeats: bookedSeatDetails,
      transactionId,
      paid: false,
    });

    await newOrder.save();

    return NextResponse.json({ url: GatewayPageURL });
  } catch (err) {
    // console.log("Error: ", err);
    return {
      status: 500,
      json: { error: `Failed because of ${err}` },
    };
  }
};

export const GET = async (request, response) => {
  await connectDB();

  try {
    const allOrders = await Orders.find();
    return NextResponse.json(allOrders);
    // return response.status(200).json(allOrders);
  } catch (error) {
    return NextResponse.json({ error: "Data not fetched Correctly!" });
  }
};
