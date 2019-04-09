import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CompanyInfo, { mapStateToProps } from "../companyInfo";
import { Card, Image, ListGroup, Col, Row } from "react-bootstrap";
import fakeData from "../../store/__mocks__/fakeStore";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../../api/iex-get.js");

describe("NewsList Component", () => {
  let wrapper = {};

  const props = {
    ...fakeData.stockDetail
  };

  beforeEach(() => {
    wrapper = shallow(<CompanyInfo {...props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it("has h3 & NewsItem components when news present", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("h3")).toHaveLength(1);
    expect(wrapper.find(NewsItem)).toHaveLength(2);
  });

  // it("has h4 components when no news present", () => {
  //   wrapper.setProps({ news: [], companyName: "test" });
  //   expect(wrapper.find("h4")).toHaveLength(1);
  //   expect(wrapper.find(NewsItem)).toHaveLength(0);
  // });

  // it("has h4 components when no news present", () => {
  //   const newsItem = wrapper.find(NewsItem).at(0);
  //   expect(newsItem.find(Card)).toHaveLength(1);
  //   expect(newsItem.find("CardHeader")).toHaveLength(1);
  //   expect(newsItem.find("CardBody")).toHaveLength(1);
  //   expect(newsItem.find("CardFooter")).toHaveLength(1);
  // });

  it("should have a mapStateToProps function", () => {
    const state = {
      stockDetail: {
        quotes: {
          symbol: "SYM",
          companyName: "name",
          primaryExchange: "exch",
          latestPrice: 78,
          latestSource: "sour",
          week52High: 90,
          week52Low: 9
        },
        companyInfo: {
          CEO: "someone",
          description: "description",
          industry: "indus",
          website: "www.website.com"
        },
        logo: "www.logo.com",
        news: [
          {
            headline: "a",
            source: "b",
            summary: "d",
            url: "c"
          }
        ]
      }
    };

    const actualResult = mapStateToProps(state);
    const expectedResult = {
      symbol: "SYM",
      companyName: "name",
      primaryExchange: "exch",
      latestPrice: 78,
      latestSource: "sour",
      week52High: 90,
      week52Low: 9,
      CEO: "someone",
      description: "description",
      industry: "indus",
      website: "www.website.com",
      logo: "www.logo.com"
    };

    expect(actualResult).toEqual(expectedResult);
  });
});
