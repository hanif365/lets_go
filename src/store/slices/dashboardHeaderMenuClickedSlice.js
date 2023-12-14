import { produce } from "immer";

const dashboardMenuInitialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const dashboardHeaderMenuClickedSlice = (set) => ({
  isDashboardHeaderMenuClicked: dashboardMenuInitialState,
  setIsDashboardHeaderMenuClicked: (clicked) =>
    set(
      produce((state) => {
        state.isDashboardHeaderMenuClicked = {
          ...dashboardMenuInitialState,
          [clicked]: true,
        };
      }),
      false,
      "successfullOrdersSlice/setIsDashboardHeaderMenuClicked"
    ),
  closeDashboardHeaderMenu: () =>
    set(
      produce((state) => {
        state.isDashboardHeaderMenuClicked = { ...dashboardMenuInitialState };
      }),
      false,
      "successfullOrdersSlice/closeDashboardHeaderMenu"
    ),
});

export default dashboardHeaderMenuClickedSlice;
