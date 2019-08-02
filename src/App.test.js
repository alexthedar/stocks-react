import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./App";
import fakeData from "./store/__mocks__/fakeStore";

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk]);
let store = null;

const initialState = {
  error: null,
  ...fakeData
};

describe("App Component", () => {
  let wrapper = {};

  beforeEach(() => {
    store = mockStore(initialState);

    wrapper = shallow(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
