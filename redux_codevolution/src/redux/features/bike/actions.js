import { ADD_BIKE, BUY_BIKE } from "./types"

export const buyBike = () => {
    return {
        type: BUY_BIKE
    }
}

export const addBike = () => {
    return {
        type: ADD_BIKE
    }
}