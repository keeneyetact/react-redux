import { CREATE, REMOVE } from "./actionTypes";

export const create = (value) => {
    return {
        type: CREATE,
        payload: value
    }
}

export const remove = (value) => {
    return {
        type: REMOVE,
        payload: value
    }
}