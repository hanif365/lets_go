const toggleSidebarSlice = (set) => ({
  isSidebarCollapsed: false,
  toggleSidebar: () =>
    set(
      (state) => ({isSidebarCollapsed: !state.isSidebarCollapsed}),
      false,
      "toggleSidebarSlice/toggleSidebar"
    ),
});
export default toggleSidebarSlice;
