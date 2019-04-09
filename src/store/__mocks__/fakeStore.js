export default {
  market: {
    marketTops: [
      {
        askPrice: 1,
        askSize: 2,
        bidPrice: 3,
        bidSize: 4,
        lastSalePrice: 5,
        lastSaleSize: 6,
        lastSaleTime: 7,
        lastUpdated: 8,
        marketPercent: 9,
        sector: "sector",
        securityType: "security",
        symbol: "SYMBOL",
        volume: 10
      },
      {
        askPrice: 11,
        askSize: 21,
        bidPrice: 31,
        bidSize: 41,
        lastSalePrice: 51,
        lastSaleSize: 61,
        lastSaleTime: 71,
        lastUpdated: 81,
        marketPercent: 91,
        sector: "sector1",
        securityType: "security1",
        symbol: "TEST",
        volume: 101
      }
    ]
  },
  search: { refSymbolTypeAhead: ["A", "B", "C"] },
  stockDetail: {
    companyInfo: {
      CEO: "CEO",
      companyName: "NAME",
      description: "DESC",
      exchange: "EXCH",
      industry: "industry",
      issueType: "issueType",
      sector: "sector",
      symbol: "SYMB",
      tags: ["tag"],
      website: "http://www.test.com."
    },
    logo: "www.test.com",
    news: [
      {
        headline: "headline",
        source: "source",
        summary: "summary",
        url: "url"
      },
      {
        headline: "headline1",
        source: "source1",
        summary: "summary1",
        url: "url1"
      }
    ],
    quotes: [
      {
        companyName: "companyName",
        primaryExchange: "primaryExchange",
        latestPrice: "latestPrice",
        latestSource: "latestSource",
        week52High: "week52High",
        week52Low: "week52Low"
      },
      {
        companyName: "companyName1",
        primaryExchange: "primaryExchange1",
        latestPrice: "latestPrice1",
        latestSource: "latestSource1",
        week52High: "week52High1",
        week52Low: "week52Low1"
      }
    ],
    stockSymbol: "SYMBOL"
  }
};
