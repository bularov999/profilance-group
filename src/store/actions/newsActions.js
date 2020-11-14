import {ADD_ITEM, DELETE_ITEM, LIKED_ITEM} from '../actionTypes/newsActionTypes'

export function addItem(name, text) {
    return {
        type: ADD_ITEM,
        payload: {
            name,
            text
        }
    }
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: {
            id
        }
    }
}

export  function likedItem(id) {
    return {
        type: LIKED_ITEM,
        payload: {
            id
        }
    }
}