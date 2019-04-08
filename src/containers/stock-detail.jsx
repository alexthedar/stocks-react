/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const NewsItem = ({ datetime, headline, source, url, summary }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {" "}
        <h3>{headline}</h3>{" "}
      </a>
      <div>
        Source: <em>{source}</em>, {datetime.substring(0, 10)}
      </div>
      <div>
        <p>{summary}</p>
      </div>
    </div>
  );
};

const NewsList = ({ news }) => (
  <div>
    {news.map((newsItem, index) => {
      return (
        <div key={"news" + index}>
          <hr />
          <NewsItem {...newsItem} />
        </div>
      );
    })}
  </div>
);

class StockDetail extends Component {
  componentDidMount() {
    const {
      match: {
        params: { symbol }
      },
      loadQuotesForSymbol,loadNewsForSymbol
    } = this.props;
    console.log(symbol);
    loadQuotesForSymbol(symbol);
    loadNewsForSymbol(symbol);
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { symbol }
      },
      loadQuotesForSymbol, loadNewsForSymbol
    } = this.props;
    if (prevProps.match.params.symbol !== symbol) {
      loadQuotesForSymbol(symbol);
      loadNewsForSymbol(symbol);
    }
  }

  render() {
    const {
      symbol, // AAPL
      companyName, // Apple Inc.
      primaryExchange, // Nasdaq Global Select
      latestPrice, // 169.48
      latestSource, // Close
      week52High, // 176.24
      week52Low, // 108.25
      logo,news
    } = this.props;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body d-flex flex-wrap">
            <img className="p-2" src={logo} alt="" />
            <h2 className="card-title p-2">
              <strong>
                {symbol} - {companyName}
              </strong>
            </h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>{latestSource}</strong>
              <span className="text-primary">{latestPrice}</span>
            </li>
            <li className="list-group-item">
              <strong>Week 52 High</strong>
              <span className="text-success">{week52High}</span>
            </li>
            <li className="list-group-item">
              <strong>Week 52 Low</strong>
              <span className="text-danger">{week52Low}</span>
            </li>
            <li className="list-group-item">
              <strong>Exchange</strong> {primaryExchange}
            </li>
          </ul>
        </div>
        <NewsList news={news} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadQuotesForSymbol: symbol => dispatch(actions.getSymbolQuotes(symbol)),
    loadNewsForSymbol: symbol => dispatch(actions.getSymbolNews(symbol))
  };
};

export function mapStateToProps(state) {
  const {
    quotes: {
      symbol,
      companyName,
      primaryExchange,
      latestPrice,
      latestSource,
      week52High,
      week52Low,
      logo
    },
    news
  } = state.stockDetail;
  return {
    symbol,
    companyName,
    primaryExchange,
    latestPrice,
    latestSource,
    week52High,
    week52Low,
    logo,
    news
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetail);
