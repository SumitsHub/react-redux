import { combineReducers } from "redux";
import counterReducer from "./counter";
import geolocationReducer from "./geolocation";

const rootReducer = combineReducers({
  counter: counterReducer,
  geoLocation: geolocationReducer,
});

export default rootReducer;
