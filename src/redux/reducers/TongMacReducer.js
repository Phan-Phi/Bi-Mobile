import { MacbookAPI } from "../../API/MacbookAPI";

const stateTongMac = {
  macbook: MacbookAPI,
};

export const TongMacReducer = (state = stateTongMac, action) => {
  switch (action.type) {
  }
  return { ...state };
};
