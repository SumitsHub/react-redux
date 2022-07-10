import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import bikeReducer from "./features/bike/reducer";
import cakeReducer from "./features/cake/reducer";
import userReducer from "./features/user/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ bike: bikeReducer, cake: cakeReducer, users: userReducer });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
