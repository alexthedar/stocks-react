import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import BootstrapTable from "react-bootstrap-table-next";
import paginator from "react-bootstrap-table2-paginator";
import { dataWithUTC } from "../store/selectors/index";

const sortCarets = (order, column) => {
  if (!order) return <span />;
  else if (order === "asc")
    return (
      <small>
        &nbsp;&nbsp;&nbsp;<font color="red">&#9650;</font>
      </small>
    );
  else if (order === "desc")
    return (
      <small>
        &nbsp;&nbsp;&nbsp;<font color="red">&#9660;</font>
      </small>
    );
  return null;
};

const priceFormatter = (cell, row) => <small>{cell}</small>;

const columns = [
  {
    dataField: "symbol",
    text: "Symbol",
    sort: true,
    sortCaret: (order, column) => sortCarets(order, column)
  },
  {
    dataField: "price",
    text: "Price",
    sort: true,
    sortCaret: (order, column) => sortCarets(order, column)
  },
  {
    dataField: "size",
    text: "Size",
    sort: true,
    sortCaret: (order, column) => sortCarets(order, column)
  },
  {
    dataField: "time",
    text: "Time",
    sort: true,
    sortCaret: (order, column) => sortCarets(order, column),
    formatter: priceFormatter
  }
];

const Table = ({ handleRowClick, data }) => {
  const rowEvents = {
    onClick: (e, row) => {
      handleRowClick(e, row);
    }
  };
  return (
    <BootstrapTable
      keyField="symbol"
      data={data}
      columns={columns}
      striped
      hover
      condensed
      bordered={false}
      rowEvents={rowEvents}
      loading={true}
      pagination={paginator()}
    />
  );
};

export class MarketTable extends Component {
  componentDidMount() {
    const { loadMarket } = this.props;
    loadMarket();
  }

  handleRowClick = (e, row) => {
    e.preventDefault();
    const { setStockSymbol, history } = this.props;
    setStockSymbol(row.symbol);
    history.push(`/stock/${row.symbol}`);
  };

  render() {
    const { list } = this.props;

    return (
      <React.Fragment>
        <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Lastest Trades on IEX
        </h3>
        <Table handleRowClick={this.handleRowClick} data={list} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMarket: () => dispatch(actions.getMarket()),
    setStockSymbol: symbol => dispatch(actions.setStockSymbol(symbol))
  };
};

export function mapStateToProps(state) {
  return { list: dataWithUTC(state) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketTable);
