import {USERLOGIN, ADMINLOGIN, LOGOUT} from './actionTypes/authActionTypes'

const initialState = {
    isAuth: false,
    isUser: false,
    isAdmin: false
}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case USERLOGIN:
            return {...state, isAuth: true, isUser: true}
        case ADMINLOGIN:
            return {...state, isAuth: true, isAdmin: true}
        case LOGOUT:
            return {...state , isAuth: false, isUser: false ,isAdmin: false}
        default:
            return state
    }
}