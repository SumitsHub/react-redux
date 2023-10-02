import { Types } from "../actions/users";

const INITIAL_STATE = {
  items: [],
  error: null,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return { items: action.payload.items, error: null };
    case Types.USER_REQUEST_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}
