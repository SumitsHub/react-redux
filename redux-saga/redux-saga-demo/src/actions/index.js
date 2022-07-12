import { IMAGES } from "../constants"

export const fetchImagesRequest = (key) => ({
    type: IMAGES.REQUEST,
    payload: {key}
})

export const fetchImageSuccess = images => ({
    type: IMAGES.SUCCESS,
    payload: images
})

export const fetchImagesFailure = error => ({
    type: IMAGES.FAILURE,
    error
})