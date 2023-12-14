const { create } = require("zustand");
import { devtools, persist } from "zustand/middleware";
import toggleSidebarSlice from "./slices/toggleSidebarSlice";
import dashboardHeaderMenuClickedSlice from "./slices/dashboardHeaderMenuClickedSlice";
import successfullOrdersSlice from "./slices/successfullOrdersSlice";

const useStore = create(
  devtools((...a) => ({
    ...toggleSidebarSlice(...a),
    ...dashboardHeaderMenuClickedSlice(...a),
    ...successfullOrdersSlice(...a),
  }))
);

export default useStore;
