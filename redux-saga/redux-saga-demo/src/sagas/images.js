import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchImagesFailure, fetchImageSuccess } from '../actions';
import { IMAGES } from '../constants';
const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

function fetchImages() {
    return fetch(
        `https://api.unsplash.com/photos/?client_id=${key}&per_page=28`,
    ).then(res => res.json());
}

function* fetchImagesWorker() {
    try {
        const images = yield call(fetchImages);
        yield put(fetchImageSuccess(images));
    } catch (error) {
        yield put(fetchImagesFailure('Failure'));
    }
}

function* fetchImagesSaga() {
    yield takeEvery(IMAGES.REQUEST, fetchImagesWorker);
}

export default fetchImagesSaga;
