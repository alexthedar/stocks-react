import * as constants from "../constants";
import { updateObject } from "../../shared-utils";

const initialState = {
  marketTops: [],
  marketLast: []
};

const setMarketTops = (state, action) =>
  updateObject(state, { marketTops: action.marketTops });

const setMarketLast = (state, action) =>
  updateObject(state, { marketLast: action.marketLast });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_MARKET_LAST:
      return setMarketLast(state, action);
    case constants.SET_MARKET_TOP:
      return setMarketTops(state, action);
    default:
      return state;
  }
};

export default reducer;
