import { expect } from "chai";
import marketReducer, { initialState } from "../marketReducer";
import * as actions from "../../actions/index";

describe("search reducer", () => {
  let action;
  let actualResult;
  let expectedResult;

  it("should return the initial state", () => {
    expect(marketReducer(undefined, {})).to.deep.equal({
      list: []
    });
  });

  it("should react to SET_MARKET_TOP action", () => {
    action = actions.setMarketData(["test"]);
    actualResult = marketReducer(initialState, action);
    expectedResult = {
      ...initialState,
      list: ["test"]
    };
    expect(actualResult).to.deep.equal(expectedResult);
  });
});
