import * as constants from "../constants";
import * as iexGet from "../../api/iex-get";

export const extractNameAndSymbols = iexRefData => {
  return iexRefData.map(({ symbol }) => symbol);
};

export const fetchRefSymbols = () => {
  return {
    type: constants.GET_REF_SYMBOLS
  };
};

export const setRefSymbols = refSymbols => {
  return {
    type: constants.SET_REF_SYMBOLS,
    refSymbols
  };
};

export const getRefSymbols = () => {
  return dispatch => {
    dispatch(fetchRefSymbols());
    iexGet.refDataSymbols().then(res => {
      return dispatch(setRefSymbols(extractNameAndSymbols(res)));
    });
  };
};
