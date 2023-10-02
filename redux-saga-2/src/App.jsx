import "./App.css";
import axios from "axios";
import { connect } from "react-redux";
import { getUsersRequest } from "./actions/users";
import { useEffect } from "react";
import UsersList from "./components/UsersList";

axios.defaults.baseURL = "http://localhost:3000";

function App(props) {
  useEffect(() => {
    props.getUsersRequest();
  }, []);
  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      Redux Saga Udemy Tutorial
      <UsersList users={props.users.items} />
    </div>
  );
}

const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(mapStateToProps, {
  getUsersRequest,
})(App);
