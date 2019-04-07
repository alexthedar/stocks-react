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

export const fetchSymbolChart = () => {
  return {
    type: constants.GET_SYMBOL_CHART
  };
};

export const fetchSymbolTrades = () => {
  return {
    type: constants.GET_SYMBOL_TRADES
  };
};

export const fetchSymbolBook = () => {
  return {
    type: constants.GET_SYMBOL_BOOK
  };
};

export const fetchSymbolCompanyInfo = () => {
  return {
    type: constants.GET_SYMBOL_COMPANY_INFO
  };
};

export const fetchSymbolPrice = () => {
  return {
    type: constants.GET_SYMBOL_PRICE
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

export const setSymbolChart = chart => {
  return {
    type: constants.SET_SYMBOL_CHART,
    chart
  };
};

export const setSymbolTrades = trades => {
  return {
    type: constants.SET_SYMBOL_TRADES,
    trades
  };
};

export const setSymbolBook = book => {
  return {
    type: constants.SET_SYMBOL_BOOK,
    book
  };
};

export const setSymbolCompanyInfo = companyInfo => {
  return {
    type: constants.SET_SYMBOL_COMPANY_INFO,
    companyInfo
  };
};

export const setSymbolPrice = price => {
  return {
    type: constants.SET_SYMBOL_PRICE,
    price
  };
};

export const getSymbolQuotes = (symbol) => {
  console.log(symbol);
  return dispatch => {
    dispatch(fetchSymbolQuotes());
    iexGet.quotesForSymbol(symbol).then(res => dispatch(setSymbolQuotes(res)));
  };
};

export const getSymbolLogo = (symbol) => {
  return dispatch => {
    dispatch(fetchSymbolLogo());
    iexGet.logoForSymbol(symbol).then(res => dispatch(setSymbolLogo(res)));
  };
};

export const getSymbolNews = (symbol) => {
  return dispatch => {
    dispatch(fetchSymbolNews());
    iexGet.recentNewsForSymbol(symbol).then(res => dispatch(setSymbolNews(res)));
  };
};

export const getSymbolChart = (symbol, range) => {
  return dispatch => {
    dispatch(fetchSymbolChart());
    iexGet.chartForSymbol(symbol).then(res => dispatch(setSymbolChart(res)));
  };
};

export const getSymbolTrades = (symbol) => {
  return dispatch => {
    dispatch(fetchSymbolTrades());
    iexGet.tradesForSymbol(symbol).then(res => dispatch(setSymbolTrades(res)));
  };
};

export const getSymbolBook = (symbol) => {
  return dispatch => {
    dispatch(fetchSymbolBook());
    iexGet.bookForSymbol(symbol).then(res => dispatch(setSymbolBook(res)));
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

export const getSymbolPrice = (symbol) => {
  return dispatch => {
    dispatch(fetchSymbolPrice());
    iexGet.priceForSymbol(symbol).then(res => dispatch(setSymbolPrice(res)));
  };
};