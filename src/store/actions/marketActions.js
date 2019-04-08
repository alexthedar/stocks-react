import * as constants from "../constants";
import * as iexGet from "../../api/iex-get";

export const fetchMarketTop = () => {
  return {
    type: constants.GET_MARKET_TOP
  };
};

export const setMarketTopData = marketTops => {
  return {
    type: constants.SET_MARKET_TOP,
    marketTops
  };
};

export const getMarketTops = () => {
  return dispatch => {
    iexGet.topsData().then(res => {
      dispatch(fetchMarketTop());
      return dispatch(setMarketTopData(res));
    });
  };
};
