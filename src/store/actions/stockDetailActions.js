import * as constants from "../constants";
import * as iexGet from "../../api/iex-get";

export const fetchSymbolQuotes = () => {
  return {
    type: constants.GET_SYMBOL_QUOTES
  };
};

export const fetchSymbolLogo = () => {
  return {
    type: constants.GET_SYMBOL_LOGO
  };
};

export const fetchSymbolNews = () => {
  return {
    type: constants.GET_SYMBOL_NEWS
  };
};

export const fetchSymbolCompanyInfo = () => {
  return {
    type: constants.GET_SYMBOL_COMPANY_INFO
  };
};

export const setSymbolQuotes = quotes => {
  return {
    type: constants.SET_SYMBOL_QUOTES,
    quotes
  };
};

export const setSymbolLogo = logo => {
  return {
    type: constants.SET_SYMBOL_LOGO,
    logo
  };
};

export const setSymbolNews = news => {
  return {
    type: constants.SET_SYMBOL_NEWS,
    news
  };
};

export const setSymbolCompanyInfo = companyInfo => {
  return {
    type: constants.SET_SYMBOL_COMPANY_INFO,
    companyInfo
  };
};

export const setStockSymbol = stockSymbol => {
  return {
    type: constants.SET_STOCK_SYMBOL,
    stockSymbol
  };
};

export const getSymbolQuotes = (symbol) => {
  return dispatch => {
    dispatch(fetchSymbolQuotes());
    iexGet.quotesForSymbol(symbol).then(res => dispatch(setSymbolQuotes(res)));
  };
};

export const getSymbolLogo = (symbol) => {
  return dispatch => {
    dispatch(fetchSymbolLogo());
    iexGet.logoForSymbol(symbol).then(res => dispatch(setSymbolLogo(res.url)));
  };
};

export const getSymbolNews = (symbol) => {
  return dispatch => {
    dispatch(fetchSymbolNews());
    iexGet.recentNewsForSymbol(symbol).then(res => dispatch(setSymbolNews(res)));
  };
};

export const getSymbolCompanyInfo = (symbol) => {
  return dispatch => {
    dispatch(fetchSymbolCompanyInfo());
    iexGet
      .companyInfoForSymbol(symbol)
      .then(res => dispatch(setSymbolCompanyInfo(res)));
  };
};

