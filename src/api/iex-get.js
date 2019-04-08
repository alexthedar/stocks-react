import axios from "axios";

const sortByKey = (array, key) => {
  return array.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

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

export const chartForSymbol = (symbol, range) => {
  return api
    .get(`/stock/${symbol}/chart/${range}`)
    .then(res => res.data)
    .catch(error => throwErr(error));
};

export const tradesForSymbol = symbol => {
  return api
    .get(`/deep/trades?symbols=${symbol}`)
    .then(res => res.data)
    .catch(error => throwErr(error));
};

export const bookForSymbol = symbol => {
  return api
    .get(`/stock/${symbol}/book`)
    .then(res => res.data)
    .catch(error => throwErr(error));
};

export const companyInfoForSymbol = symbol => {
  return api
    .get(`/stock/${symbol}/company`)
    .then(res => res.data)
    .catch(error => throwErr(error));
};

export const priceForSymbol = symbol => {
  return api
    .get(`/stock/${symbol}/price`)
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

export const lastData = symbol => {
  const url = symbol ? `/tops/last?symbols=${symbol}` : `/tops/last`;
  return api
    .get(url)
    .then(res => sortByKey(res.data, "time"))
    .catch(error => throwErr(error));
};
