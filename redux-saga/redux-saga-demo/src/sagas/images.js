import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchImagesFailure, fetchImageSuccess } from '../actions';
import { IMAGES } from '../constants';

// General function to fetch images by API request
function fetchImages({key}) {
    return fetch(
        `https://api.unsplash.com/photos/?client_id=${key}&per_page=28`,
    ).then(res => res.json());
}



// Worker Saga -> makes the API call in response to the watcher saga
function* fetchImagesWorker(action) {
    try {
        const images = yield call(fetchImages, {key: action.payload.key});
        yield put(fetchImageSuccess(images));
    } catch (error) {
        yield put(fetchImagesFailure('Failure'));
    }
}


// Watcher Saga -> listens for every specified action type ('IMAGES.REQUEST')
function* fetchImagesSaga() {
    yield takeEvery(IMAGES.REQUEST, fetchImagesWorker);
}

export default fetchImagesSaga;