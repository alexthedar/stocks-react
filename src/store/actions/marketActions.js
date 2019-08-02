import * as constants from "../constants";
import * as actions from "./index";
import * as iexGet from "../../api/iex-get";

export const fetchMarket = () => {
  return {
    type: constants.GET_MARKET
  };
};

export const setMarketData = market => {
  return {
    type: constants.SET_MARKET,
    market
  };
};

export const getMarket = () => {
  return dispatch =>
    Promise.resolve(iexGet.topsData())
      .then(res => {
        dispatch(fetchMarket());
        return dispatch(setMarketData(res));
      })
      .catch(error => dispatch(actions.setError(error.message)));
};
