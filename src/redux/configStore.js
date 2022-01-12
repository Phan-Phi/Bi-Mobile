import { combineReducers } from "redux";
import { ListMobileReducer } from "./reducers/ListMobileReducer";
import { TongMacReducer } from "./reducers/TongMacReducer";

export const rootReducer = combineReducers({
  ListMobileReducer,
  TongMacReducer,
});
