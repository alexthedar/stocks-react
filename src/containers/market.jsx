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
  { id: "tim", header: "Time" }
];
const tableRow = (columns, data) => {
  return columns.map(column => <td key={column.id}>{data[column.id]}</td>);
};

const tableHeader = columns => {
  return columns.map(column => <th key={column.id}>{column.header}</th>);
};

class MarketTable extends Component {
  componentDidMount() {
    const { loadLast, loadTops } = this.props;
    loadLast();
    loadTops();
  }

  handleClick(symbol){
    const {setStockSymbol, history} = this.props;
    setStockSymbol(symbol);
    history.push(`/stock/${symbol}`)
  }
  render() {
    const { marketLast, marketTops } = this.props;
    const columns = marketTops.length ? columnsTops : columnsLast;
    return (
      <React.Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>{tableHeader(columns)}</tr>
          </thead>
          <tbody>
            {// eslint-disable-next-line array-callback-return
            marketLast.map((row, idx) => {
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
