export const Types = {
  GET_USERS_REQUEST: "GET_USERS_REQUEST",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  CREATE_USER_REQUEST: "CREATE_USER_REQUEST",
};

export const getUsersRequest = () => {
  return {
    type: Types.GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { items },
});

export const createUserRequest = ({ firstName, lastName }) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName,
  },
});

export const createUserSuccess = () => ({});
