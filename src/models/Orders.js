import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    transactionId: {
      type: Number,
      unique: true,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    paid: {
      type: Boolean,
      required: true,
    },
    paidAt: {
      type: Date,
    },
  },
);

export default mongoose.models.Orders || mongoose.model("Orders", orderSchema);
