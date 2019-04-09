import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App Container Component", () => {
  let wrapper = {};
  const renderProps = {
    match: {
      params: {
        agency: ""
      }
    },
    location: {
      pathname: ""
    }
  };

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
