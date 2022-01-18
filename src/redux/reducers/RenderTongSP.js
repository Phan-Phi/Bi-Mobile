import { APITongProduct } from "../../API/APITongProduct";

const stateTongSP = {
  renderTongSP: "APITongProduct",
};

export const RenderTongSP = (state = stateTongSP, action) => {
  switch (action.type) {
    case "RENDER TONG SP": {
      state.renderTongSP = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
