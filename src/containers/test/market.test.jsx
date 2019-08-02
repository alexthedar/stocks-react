import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import fakeProps from "../../store/__mocks__/fakeStore";
import { MarketTable, mapStateToProps } from "../market";

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
    const tableBodyRow = wrapper.find("tbody").childAt(0);
    tableBodyRow.simulate("click");
    expect(props.setStockSymbol.mock.calls.length).to.equal(1);
    expect(props.history.push.mock.calls.length).to.equal(1);
  });

  it("has h3, thead, tbody, tr, th and td html tags", () => {
    expect(wrapper.find("h3")).to.have.length(1);
    expect(wrapper.find("thead")).to.have.length(1);
    expect(wrapper.find("tbody")).to.have.length(1);
    expect(wrapper.find("tr")).to.have.length(3);
    expect(wrapper.find("th")).to.have.length(7);
    expect(wrapper.find("td")).to.have.length(14);
  });

  it("should have a mapStateToProps function", () => {
    const state = {
      market: { list: ["test"] }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      list: ["test"]
    };

    expect(actualResult).to.deep.equal(expectedResult);
  });
});
