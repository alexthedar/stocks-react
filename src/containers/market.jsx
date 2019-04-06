/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class MarketTable extends Component {
  componentDidMount() {
    const { loadLast } = this.props;
    loadLast();
  }
  render() {
    const { marketLast } = this.props;

    return <React.Fragment>{JSON.stringify(marketLast)}</React.Fragment>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // loadTops: () => dispatch(actions.getMarketTops()),
    loadLast: () => dispatch(actions.getMarketLast())
  };
};

export function mapStateToProps(state) {
  const { marketLast } = state.market;
  return {
    marketLast
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketTable);
