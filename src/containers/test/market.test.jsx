import React from "react";
import { expect } from "chai";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import fakeProps from "../../store/__mocks__/fakeStore";
import { MarketTable, Table, mapStateToProps } from "../market";
import BootstrapTable from "react-bootstrap-table-next";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/iex-get.js");

describe("MarketTable Component", () => {
  let wrapper = {};

  const props = {
    ...fakeProps.market,
    loadMarket: jest.fn(),
    setStockSymbol: jest.fn(),
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    props.loadMarket.mockClear();
    props.setStockSymbol.mockClear();
    wrapper = shallow(<MarketTable {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it("dispatches loadMarket on mount", () => {
    expect(props.loadMarket.mock.calls.length).to.equal(1);
  });

  it("dispatches setStockSymbol if item clicked", () => {
    wrapper = mount(<MarketTable {...props} />);

    const tableBodyRow = wrapper.find("tr").at(1);
    tableBodyRow.simulate("click");
    expect(props.setStockSymbol.mock.calls.length).to.equal(1);
    expect(props.history.push.mock.calls.length).to.equal(1);
  });

  it("has Table and BootstrapTable", () => {
    expect(wrapper.find(Table)).to.have.length(1);
    expect(
      wrapper
        .find(Table)
        .dive()
        .find(BootstrapTable)
    ).to.have.length(1);
  });

  it("should have a mapStateToProps function", () => {
    const state = {
      market: {
        list: [
          {
            symbol: "SNAP",
            price: 111.76,
            size: 5,
            time: 1480446905681
          },
          {
            symbol: "FB",
            price: 121.41,
            size: 100,
            time: 1480446908666
          },
          {
            symbol: "AIG+",
            price: 21.52,
            size: 100,
            time: 1480446206461
          }
        ]
      }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      list: [
        {
          symbol: "SNAP",
          price: 111.76,
          size: 5,
          time: "11/29/16 @ 11:15am"
        },
        {
          symbol: "FB",
          price: 121.41,
          size: 100,
          time: "11/29/16 @ 11:15am"
        },
        {
          symbol: "AIG+",
          price: 21.52,
          size: 100,
          time: "11/29/16 @ 11:03am"
        }
      ]
    };

    expect(actualResult).to.deep.equal(expectedResult);
  });
});
