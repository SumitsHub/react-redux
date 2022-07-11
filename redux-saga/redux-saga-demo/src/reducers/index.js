import { combineReducers } from 'redux';
import imageReducer from './imagesReducer';

const rootReducer = combineReducers({ images: imageReducer });

export default rootReducer;
