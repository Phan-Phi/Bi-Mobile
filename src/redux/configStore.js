import { combineReducers } from "redux";
import { ListMobileReducer } from "./reducers/ListMobileReducer";
import { TongMacReducer } from "./reducers/TongMacReducer";
import { RenderTongSP } from "./reducers/RenderTongSP";

export const rootReducer = combineReducers({
  ListMobileReducer,
  TongMacReducer,
  RenderTongSP,
});
