import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
  take,
} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

//* worker saga
function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    console.log(result);
    yield put(actions.getUsersSuccess({ items: result.data })); // dispatch action using put
  } catch (error) {
    yield put(actions.userError({ error: "Getting users failed" }));
  }
}

//* watcher saga
function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* createUser(action) {
  console.log(action);
  try {
    yield call(api.createUser, action.payload);
    yield call(getUsers);
  } catch (error) {
    yield put(actions.userError({ error: "Create users failed" }));
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser(id) {
  try {
    yield call(api.deleteUser, id);
    yield call(getUsers);
  } catch (error) {
    yield put(actions.userError({ error: "Delete users failed" }));
  }
}

function* watchDeleteUser() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, action.payload);
  }
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUser),
];

export default userSagas;
