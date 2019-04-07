import { combineReducers } from "redux";
import market from "./marketReducer";
import stockDetail from "./stockDetailReducer";
import search from "./searchReducer";

const rootReducer = combineReducers({market, stockDetail, search});

export default rootReducer;
