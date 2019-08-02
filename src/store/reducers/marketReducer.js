import * as constants from "../constants";
import { updateObject } from "../../shared-utils";

export const initialState = {
  list: []
};

const setMarket = (state, action) =>
  updateObject(state, { list: action.market });

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_MARKET:
      return setMarket(state, action);
    default:
      return state;
  }
};

export default marketReducer;
