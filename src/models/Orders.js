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
  },
  eventData: {
    eventID: {
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
