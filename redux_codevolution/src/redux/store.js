import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import bikeReducer from "./features/bike/reducer";
import cakeReducer from "./features/cake/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ bike: bikeReducer, cake: cakeReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
