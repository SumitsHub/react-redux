import { createStore, combineReducers } from "redux";
import bikeReducer from "./features/bike/reducer";

const rootReducer = combineReducers({ bike: bikeReducer });

const store = createStore(rootReducer);

export default store;
