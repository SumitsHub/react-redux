import { ADD_BIKE, BUY_BIKE } from "./types"

const initialState = {
    numOfBikes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_BIKE:
            return {...state, numOfBikes: state.numOfBikes - 1}
        case ADD_BIKE:
            return {...state, numOfBikes: state.numOfBikes + 1}
        default:
            return state
    }
}

export default reducer;