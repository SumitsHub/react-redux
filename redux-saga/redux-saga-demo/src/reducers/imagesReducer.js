import { IMAGES } from '../constants';

const initialState = {
    loading: false,
    images: [],
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGES.REQUEST:
            return { ...state, loading: true };
        case IMAGES.SUCCESS:
            return { ...state, loading: false, images: action.payload };
        case IMAGES.FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default reducer;