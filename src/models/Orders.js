import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userData: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  eventData: {
    eventID: {
      type: String,
      required: true,
    },
    eventTitle: {
      type: String,
      required: true,
    },
    eventDate: {
      type: String,
      required: true,
    },
    eventTime: {
      type: String,
      required: true,
    },
    eventDays: {
      type: String,
      required: true,
    },
    journeyStartFrom: {
      type: String,
      required: true,
    },
    eventLocation: {
      type: String,
      required: true,
    },
    busId: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  bookedSeats: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      isBooked: {
        type: Boolean,
        required: true,
      },
      passengerName: {
        type: String,
        required: true,
      },
      passengerGender: {
        type: String,
        required: true,
      },
      passengerType: {
        type: String,
        required: true,
      },
    },
  ],
  transactionId: {
    type: Number,
    unique: true,
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
  },
  paidAt: {
    type: Date,
  },
});

export default mongoose.models.Orders || mongoose.model("Orders", orderSchema);
