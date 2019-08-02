const baseURL = "https://cloud.iexapis.com/stable";
const apiKey = `?token=${process.env.REACT_APP_API_KEY}`;

//
// reference
//

export const refDataSymbols = () => {
  const url = `${baseURL}/ref-data/symbols${apiKey}`;
  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

//
// details
//

export const quotesForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/quote${apiKey}`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

export const logoForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/logo${apiKey}`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

export const recentNewsForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/news${apiKey}`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

export const companyInfoForSymbol = symbol => {
  const url = `${baseURL}/stock/${symbol}/company${apiKey}`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};

//
// market
//

export const topsData = () => {
  const url = `${baseURL}/tops/last${apiKey}`;

  return fetch(url)
    .then(res => Promise.resolve(res.json()))
    .catch(error => Promise.reject(error));
};
