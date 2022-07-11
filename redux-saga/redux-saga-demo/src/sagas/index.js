import {all} from 'redux-saga/effects';
import fetchImagesSaga from './images';

export default function* rootSaga() {
    yield all([
        fetchImagesSaga()
    ])
}