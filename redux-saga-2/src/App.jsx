import "./App.css";
import axios from "axios";
import { connect } from "react-redux";
import { getUsersRequest, userError } from "./actions/users";
import { useEffect } from "react";
import { Alert } from "reactstrap";
import UsersList from "./components/UsersList";
import NewUserForm from "./components/NewUserForm";

axios.defaults.baseURL = "http://localhost:3000";

function App(props) {
  console.log(props);
  useEffect(() => {
    props.getUsersRequest();
  }, []);
  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      Redux Saga Udemy Tutorial
      <Alert
        color="info"
        isOpen={props.userError !== null}
        toggle={() => {
          props.resetUserError({ error: null });
        }}
      >
        {props.userError}
      </Alert>
      <NewUserForm />
      <UsersList users={props.users.items} />
    </div>
  );
}

const mapStateToProps = state => {
  return { users: state.users, userError: state.users.error };
};
export default connect(mapStateToProps, {
  getUsersRequest,
  resetUserError: userError,
})(App);
