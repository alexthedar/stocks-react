import * as constants from "../constants";
import { updateObject } from "../../shared-utils";

const initialState = {
  quotes: [],
  logo: null,
  news: [],
  chart: [],
  trades: [],
  book: [],
  companyInfo: [],
  price: null,
};

const setSymbolQuotes = (state, action) =>
  updateObject(state, { quotes: action.quotes });

const setSymbolLogo = (state, action) =>
  updateObject(state, { logo: action.logo });

const setSymbolNews = (state, action) =>
  updateObject(state, { news: action.news });

const setSymbolChart = (state, action) =>
  updateObject(state, { chart: action.chart });

const setSymbolTrades = (state, action) =>
  updateObject(state, { trades: action.trades });

const setSymbolBook = (state, action) =>
  updateObject(state, { book: action.book });

const setSymbolCompanyInfo = (state, action) =>
  updateObject(state, { companyInfo: action.companyInfo });

const setSymbolPrice = (state, action) =>
  updateObject(state, { price: action.price });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SYMBOL_QUOTES:
      return setSymbolQuotes(state, action);
    case constants.SET_SYMBOL_LOGO:
      return setSymbolLogo(state, action);
    case constants.SET_SYMBOL_NEWS:
      return setSymbolNews(state, action);
    case constants.SET_SYMBOL_CHART:
      return setSymbolChart(state, action);
    case constants.SET_SYMBOL_TRADES:
      return setSymbolTrades(state, action);
    case constants.SET_SYMBOL_BOOK:
      return setSymbolBook(state, action);
    case constants.SET_SYMBOL_COMPANY_INFO:
      return setSymbolCompanyInfo(state, action);
    case constants.SET_SYMBOL_PRICE:
      return setSymbolPrice(state, action);
    default:
      return state;
  }
};

export default reducer;
