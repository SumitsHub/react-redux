import axios from "axios";

export const getUsers = () => {
  return axios.get("/users");
};

export const createUser = user => {
  return axios.post("/users", user);
};
