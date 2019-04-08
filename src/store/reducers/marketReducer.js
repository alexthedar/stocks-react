import * as constants from "../constants";
import { updateObject } from "../../shared-utils";

const initialState = {
  marketTops: [],
};

const setMarketTops = (state, action) =>
  updateObject(state, { marketTops: action.marketTops });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_MARKET_TOP:
      return setMarketTops(state, action);
    default:
      return state;
  }
};

export default reducer;
