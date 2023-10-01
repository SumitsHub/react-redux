import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
