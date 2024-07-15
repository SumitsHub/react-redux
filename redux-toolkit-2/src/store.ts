// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
