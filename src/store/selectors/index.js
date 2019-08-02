import { createSelector } from "reselect";
import { formatDate } from "../../shared-utils";

const getMarketData = state => state.market.list;

export const dataWithUTC = createSelector(
  getMarketData,
  marketData => {
    const transformedMarketData = marketData.map(item => {
      item.time = formatDate(item.time);
      return item;
    });
    return transformedMarketData;
  }
);
