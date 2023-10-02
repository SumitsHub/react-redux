import { takeEvery, takeLatest, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    console.log(result);
    yield put(actions.getUsersSuccess({ items: result.data }));
  } catch (error) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* createuser(action) {
  console.log(action);
  try {
    yield call(api.createUser, action.payload);
    yield call(getUsers);
  } catch (error) {}
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createuser);
}

const userSagas = [fork(watchGetUsersRequest), fork(watchCreateUserRequest)];

export default userSagas;
