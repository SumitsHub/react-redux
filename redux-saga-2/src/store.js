import { legacy_createStore } from "redux";
import reducers from "./reducers";

const store = legacy_createStore(reducers);

export default store;
