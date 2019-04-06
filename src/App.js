/* eslint-disable */
import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout";
// import asyncComponent from "./hoc/asyncComponent";

import MarketTable from "./containers/market";

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={MarketTable} />
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
