import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.iextrading.com/1.0'
})

export const quotesForSymbol = (symbol) => {
  return api.get(`/stock/${symbol}/quote`)
    .then( res => res.data )
}

export const logoForSymbol = (symbol) => {
  return api.get(`/stock/${symbol}/logo`)
    .then( res => res.data.url )
}

export const recentNewsForSymbol = (symbol) => {
  return api.get(`/stock/${symbol}/news`)
    .then( res => res.data)
}

export const chartForSymbol = (symbol, range) => {
  return api.get(`/stock/${symbol}/chart/${range}`)
    .then( res => res.data)
}

export const refDataSymbols = () => {
  return api.get(`/ref-data/symbols`)
    .then( res => res.data)
}

export const topsData = (symbol) => {
  const url = symbol ? `/tops?symbols=${symbol}` : `/tops`;
  return api.get(url)
    .then( res => res.data)
}

export const lastData = (symbol) => {
  const url = symbol ? `/tops/last?symbols=${symbol}` : `/tops/last`;
  return api.get(url)
    .then( res => res.data)
}

export const tradesForSymbol = (symbol) => {
  return api.get(`/deep/trades?symbols=${symbol}`)
    .then( res => res.data)
}

export const bookForSymbol = (symbol) => {
  return api.get(`/stock/${symbol}/book`)
    .then( res => res.data)
}

export const companyInfoForSymbol = (symbol) => {
  return api.get(`/stock/${symbol}/company`)
    .then( res => res.data)
}

export const priceForSymbol = (symbol) => {
  return api.get(`/stock/${symbol}/price`)
    .then( res => res.data)
}
