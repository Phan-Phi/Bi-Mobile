import { APIMobile } from "../../API/APIMobile";

const stateListMobile = {
  listMobile: APIMobile,
};

export const ListMobileReducer = (state = stateListMobile, action) => {
  switch (action.type) {
  }
  return { ...state };
};
