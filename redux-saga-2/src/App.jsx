import "./App.css";
import axios from "axios";
import { connect } from "react-redux";
import { getUsersRequest } from "./actions/users";
import { useEffect } from "react";

axios.defaults.baseURL = "http://localhost:3000";

function App(props) {
  useEffect(() => {
    props.getUsersRequest();
  }, []);
  return <div>Redux Saga</div>;
}

export default connect(null, {
  getUsersRequest,
})(App);
