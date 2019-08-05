export default {
  app: {
    error: "",
    isFetching: false
  },
  market: {
    list: [
      {
        symbol: "SNAP",
        price: 111.76,
        size: 5,
        time: 1480446905681
      },
      {
        symbol: "FB",
        price: 121.41,
        size: 100,
        time: 1480446908666
      },
      {
        symbol: "AIG+",
        price: 21.52,
        size: 100,
        time: 1480446206461
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
        datetime: "2019-04-1565020521:27:44-04:00",
        headline: "a headline",
        image: "https://image.com",
        related: "tags,1,2,3",
        source: "source",
        summary: "a summary",
        url: "https://url.com"
      },
      {
        datetime: "2019-05-09T16:27:44-04:00",
        headline: "next headline",
        image: "https://image.com",
        related: "tags,1,2,3",
        source: "source",
        summary: "next summary",
        url: "https://url.com"
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
