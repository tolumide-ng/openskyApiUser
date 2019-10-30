import { combineReducers } from "redux";
import { airportReducer } from "./reducers/fetchAirport";

const rootReducer = combineReducers({
  airportReducer,
});

export default rootReducer;
