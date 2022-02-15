import { combineReducers } from "redux";
import { ListMobileReducer } from "./reducers/ListMobileReducer";
import { TongMacReducer } from "./reducers/TongMacReducer";
import { RenderTongSP } from "./reducers/RenderTongSP";
import { RenderProducts } from "./reducers/ProductReducer";
import { GioHangReducer } from "./reducers/GioHangReducer";
export const rootReducer = combineReducers({
  ListMobileReducer,
  TongMacReducer,
  RenderTongSP,
  RenderProducts,
  GioHangReducer,
});
