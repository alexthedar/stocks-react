import { combineReducers } from "redux";
import market from "./marketReducer";
import stockDetail from "./stockDetailReducer";

const rootReducer = combineReducers({market, stockDetail});

export default rootReducer;
