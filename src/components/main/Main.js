import React from 'react'
import {useSelector} from "react-redux";

export function Main() {
    const authState = useSelector(state => state.authentication)
    if (authState.isUser) {
        return (
            <h1>Привет, user</h1>
        )
    } else if (authState.isAuth) {
            return (
                <h1>Привет , Админ</h1>
            )
    }else {
        return  (
            <h1>Привет, Гость</h1>
        )
    }
}
