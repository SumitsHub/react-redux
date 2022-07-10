import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./types";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (err) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: err,
  };
};

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const users = res.data;
      dispatch(fetchUsersSuccess(users));
    })
    .catch((err) => {
      const errMsg = err.message;
      dispatch(fetchUsersFailure(errMsg));
    });
};
