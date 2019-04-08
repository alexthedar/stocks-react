import * as constants from "../constants";
import { updateObject } from "../../shared-utils";

const initialState = {
  quotes: [],
  logo: null,
  news: [],
  companyInfo: [],
  stockSymbol: '',
};

const setSymbolQuotes = (state, action) =>
  updateObject(state, { quotes: action.quotes });

const setSymbolLogo = (state, action) =>
  updateObject(state, { logo: action.logo });

const setSymbolNews = (state, action) =>
  updateObject(state, { news: action.news });

const setSymbolCompanyInfo = (state, action) =>
  updateObject(state, { companyInfo: action.companyInfo });

const setStockSymbol = (state, action) =>
  updateObject(state, { stockSymbol: action.stockSymbol });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_SYMBOL_QUOTES:
      return setSymbolQuotes(state, action);
    case constants.SET_SYMBOL_LOGO:
      return setSymbolLogo(state, action);
    case constants.SET_SYMBOL_NEWS:
      return setSymbolNews(state, action);
    case constants.SET_SYMBOL_COMPANY_INFO:
      return setSymbolCompanyInfo(state, action);
    case constants.SET_STOCK_SYMBOL:
      return setStockSymbol(state, action);
    default:
      return state;
  }
};

export default reducer;
