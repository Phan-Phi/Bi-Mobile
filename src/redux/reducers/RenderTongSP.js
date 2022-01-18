import { APITongProduct } from "../../API/APITongProduct";

const stateTongSP = {
  renderData: [],

  renderTongSP: APITongProduct,
};

export const RenderTongSP = (state = stateTongSP, action) => {
  switch (action.type) {
    case "RENDER_TONG_SP": {
      let a = [{ a: 1 }];
      const dataNew = state.renderTongSP.filter((sp) => sp.id == action.data);
      console.log("dataNewdataNew", dataNew);
      //   const dataNew = a;
      state.renderData = dataNew[0];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
