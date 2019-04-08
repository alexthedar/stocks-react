import axios from "axios";

const api = axios.create({
  baseURL: "https://api.iextrading.com/1.0"
});

const throwErr = err => new Error(err);

//
// reference
//

export const refDataSymbols = () => {
  return api
    .get(`/ref-data/symbols`)
    .then(res => res.data)
    .catch(error => throwErr(error));
};

//
// details
//

export const quotesForSymbol = symbol => {
  return api
    .get(`/stock/${symbol}/quote`)
    .then(res => res.data)
    .catch(error => throwErr(error));
};

export const logoForSymbol = symbol => {
  return api
    .get(`/stock/${symbol}/logo`)
    .then(res => res.data)
    .catch(error => throwErr(error));
};

export const recentNewsForSymbol = symbol => {
  return api
    .get(`/stock/${symbol}/news`)
    .then(res => res.data)
    .catch(error => throwErr(error));
};

export const companyInfoForSymbol = symbol => {
  return api
    .get(`/stock/${symbol}/company`)
    .then(res => res.data)
    .catch(error => throwErr(error));
};

//
// market
//

export const topsData = symbol => {
  const url = symbol ? `/tops?symbols=${symbol}` : `/tops`;
  return api
    .get(url)
    .then(res => res.data.reverse())
    .catch(error => throwErr(error));
};
