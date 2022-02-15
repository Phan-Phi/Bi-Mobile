const stateGioHang = {
  GioHang: [],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "RENDER_GIO_HANG": {
      state.GioHang = [...state.GioHang, action.data];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
