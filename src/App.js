/* eslint-disable */
import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./hoc/Layout";
import asyncComponent from "./hoc/asyncComponent";
import MarketTable from "./containers/market";
import * as actions from "./store/actions/index";

const asyncStockDetail = asyncComponent(() => {
  return import("./containers/stock-detail");
});

class App extends Component {
  componentDidMount() {
    const { getRefSymbols } = this.props;
    getRefSymbols();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/stock/:symbol" component={asyncStockDetail} />
        <Route exact path="/" component={MarketTable} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRefSymbols: () => dispatch(actions.getRefSymbols())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(App));
