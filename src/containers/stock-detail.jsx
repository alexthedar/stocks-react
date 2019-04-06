/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class StockDetail extends Component {

  render() {
    const { marketLast } = this.props;

    return <React.Fragment>StockDetail</React.Fragment>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
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
)(StockDetail);
