import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const columnsTops = [
  { id: "symbol", header: "Symbol" },
  { id: "askPrice", header: "Ask Price" },
  { id: "askSize", header: "Ask Size" },
  { id: "bidPrice", header: "Bid Price" },
  { id: "bidSize", header: "Bid Size" },
  { id: "lastSalePrice", header: "Last Sale Price" },
  { id: "lastSaleSize", header: "Last Sale Size" }
];

const columnsLast = [
  { id: "symbol", header: "Symbol" },
  { id: "price", header: "Price" },
  { id: "size", header: "Size" },
  { id: "time", header: "Time" }
];
const tableRow = (columns, data) =>
  columns.map(column => {
    let cellData = data[column.id];
    if(column.id === 'time'){
      cellData = new Date(data[column.id]).toLocaleTimeString('en-US');
    }
  return <td key={column.id}>{cellData}</td>
});

const tableHeader = columns =>
  columns.map(column => <th key={column.id}>{column.header}</th>);

class MarketTable extends Component {
  componentDidMount() {
    const { loadLast, loadTops } = this.props;
    loadLast();
    loadTops();
  }

  handleClick(symbol) {
    const { setStockSymbol, history } = this.props;
    setStockSymbol(symbol);
    history.push(`/stock/${symbol}`);
  }
  render() {
    const {
      match: {
        params: { chart }
      }
    } = this.props;

    const { marketLast, marketTops } = this.props;
    const columns = chart === "tops" ? columnsTops : columnsLast;
    const data = chart === "tops" ? marketTops : marketLast;
    const title =
      chart === "tops"
        ? "Top 100 Best Quoted Bids & Offers"
        : "Last 100 Stocks Executions on IEX";
    return (
      <React.Fragment>
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>{title}</h3>
        <Table striped bordered hover>
          <thead>
            <tr>{tableHeader(columns)}</tr>
          </thead>
          <tbody>
            {// eslint-disable-next-line array-callback-return
            data.map((row, idx) => {
              while (idx < 100) {
                return (
                  <tr onClick={() => this.handleClick(row.symbol)} key={idx}>
                    {tableRow(columns, row)}
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTops: () => dispatch(actions.getMarketTops()),
    loadLast: () => dispatch(actions.getMarketLast()),
    setStockSymbol: symbol => dispatch(actions.setStockSymbol(symbol))
  };
};

export function mapStateToProps(state) {
  const { marketLast, marketTops } = state.market;
  return {
    marketLast,
    marketTops
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketTable);
