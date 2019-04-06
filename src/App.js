/* eslint-disable */
import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout";
import asyncComponent from "./hoc/asyncComponent";
import MarketTable from "./containers/market";


const asyncStockDetail = asyncComponent((() => {
  return import('./containers/stock-detail')
}));

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/market" component={MarketTable} />
        <Route path="/stock/:symbol" component={asyncStockDetail} />
        <Route
          exact
          path="/"
          render={() => {
            <Redirect to="/market" />;
          }}
        />
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
export default withRouter(App);
