import { IMAGES } from "../constants";

export const fetchImagesRequest = () => ({
    type: IMAGES.REQUEST
})

export const fetchImageSuccess = images => ({
    type: IMAGES.SUCCESS,
    payload: images
})

export const fetchImagesFailure = error => ({
    type: IMAGES.FAILURE,
    error
})