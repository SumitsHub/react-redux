import { BUY_CAKE } from "./types"

export const buyCake = (number) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}