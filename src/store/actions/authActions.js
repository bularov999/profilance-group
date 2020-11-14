import {
    USERLOGIN,
    ADMINLOGIN,
    LOGOUT
} from '../actionTypes/authActionTypes'

export function userLogin() {
    return {
        type:USERLOGIN
    }
}

export function adminLogin() {
    return {
        type:ADMINLOGIN
    }
}

export function logout() {
    return {
        type:LOGOUT
    }
}
