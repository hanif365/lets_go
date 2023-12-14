import { produce } from "immer";

const successfullOrdersSlice = (set) => ({
  successfullOrders: [],
  setSuccessfullOrders: (success_orders) =>
    set(
      produce((state) => ({ successfullOrders: success_orders })),
      false,
      "successfullOrdersSlice/setSuccessfullOrders"
    ),
});
export default successfullOrdersSlice;
