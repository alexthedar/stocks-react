import { expect } from "chai";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fakeStore from '../../__mocks__/fakeStore';
import * as constants from "../../constants";
import * as actions from "../index";
import * as iexGet from "../../api/iex-get";

const mockStore = configureStore([thunk]);
const store = mockStore(fakeStore);

describe("app action creators", () => {
  let expectedResult;
  let actualResult;

  beforeEach(() => {
    store.clearActions();
  });

  jest.mock(iexGet);

  describe("fetchMarketTop action creator", () => {
    it("should create an action to fetch Market Top data", () => {
      actualResult = actions.fetchMarketTop();
      expectedResult = {
        type: constants.fetchMarketTop
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("setMarketTopData action creator", () => {
    it("should create an action to set Market top Data", () => {
      actualResult = actions.setMarketTopData();
      expectedResult = {
        type: constants.setMarketTopData
      };
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe("getMarketTops action creator", () => {
    it("should set the market tops data in state", () => {
      iexGet.topsData.mockResolvedValue();
      return store.dispatch(actions.getMarketTops()).then(() => {
        expectedResult = store.getActions();
        actualResult = [actions.fetchMarketTop, actions.setMarketTopData()];
        return expect(actualResult).to.deep.equal(expectedResult);
      });
    });
  });
});
