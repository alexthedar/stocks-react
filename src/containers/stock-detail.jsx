/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image, ListGroup, Col } from "react-bootstrap";
import * as actions from "../store/actions/index";
import CompanyInfo from "../components/companyInfo";
import CompanyNews from '../components/companyNews';

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
      }
    } = this.props;
    this.loadSymbol(symbol);
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { symbol }
      }
    } = this.props;
    if (prevProps.match.params.symbol !== symbol) {
      this.loadSymbol(symbol);
    }
  }

  loadSymbol(symbol) {
    const {
      loadQuotesForSymbol,
      loadNewsForSymbol,
      loadLogoForSymbol
    } = this.props;
    loadQuotesForSymbol(symbol);
    loadNewsForSymbol(symbol);
    loadLogoForSymbol(symbol);
  }

  render() {
    const {
      symbol,
      companyName,
      primaryExchange,
      latestPrice,
      latestSource,
      week52High,
      week52Low,
      logo,
      news
    } = this.props;
    console.log(logo);
    return (
      <React.Fragment>
        <CompanyInfo />
        <CompanyNews news={news} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadQuotesForSymbol: symbol => dispatch(actions.getSymbolQuotes(symbol)),
    loadNewsForSymbol: symbol => dispatch(actions.getSymbolNews(symbol)),
    loadLogoForSymbol: symbol => dispatch(actions.getSymbolLogo(symbol))
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
      week52Low
    },
    logo,
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
