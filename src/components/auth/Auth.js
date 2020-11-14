import React, {useState} from 'react'
import './Auth.css'
import {user, admin} from '../../data/users'
import {useDispatch} from "react-redux";
import {userLogin, adminLogin} from '../../store/actions/authActions'
export function Auth({activeModal, setActive}) {
    const [error, setError] = useState(false)
    const [Authinticated, setAuthinticated] = useState({
        'name': '',
        'password': '',
        'repeatPassword': ''
    })
    const dispatch = useDispatch()
    const submit = function (e) {
        e.preventDefault()
        const checkUser = {
            userName: Authinticated['name'] === user.name,
            userPassword: Authinticated['password'] === user.password,
            userRepeatPassword: Authinticated['repeatPassword'] === user.password
        }
        const checkAdmin = {
            adminName: Authinticated['name'] === admin.name,
            adminPassword: Authinticated['password'] === admin.password,
            adminRepeatPassword: Authinticated['repeatPassword'] === admin.password
        }
        if (checkUser.userName && checkUser.userPassword && checkUser.userRepeatPassword) {
            dispatch(userLogin())
            setActive(false)
        } else if (checkAdmin.adminName && checkAdmin.adminPassword && checkAdmin.adminRepeatPassword) {
            dispatch(adminLogin())
            setActive(false)
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }

    const onInputBlur = function (e, key) {
        setAuthinticated(state => ({
            ...state, [key]: e.target.value.trim()
        }))
    }

    return (
        <div className={activeModal ? "modal active" : "modal"}>
            <div className={activeModal ? "modal__content active" : "modal__content"}>
                <div className="modal__cross"><span className="modal__cross-item"
                                                    onClick={() => setActive(false)}>x</span></div>
                <div className="modal__form-group">
                    <div
                        className={error ? 'modal__error-alert' : 'modal__error-alert-hide'}
                    >
                        <small>Неправильные данные</small>
                    </div>
                    <form className="modal__form" onSubmit={submit}>
                        <div className="modal__input-block">
                            <input
                                type="text"
                                className="modal__username modal__input"
                                placeholder="username" value={Authinticated['name']}
                                onInput={(e) => onInputBlur(e, 'name')}
                            />
                        </div>
                        <div className="modal__input-block">
                            <input
                                type="password"
                                className="modal__password modal__input"
                                placeholder="password"
                                value={Authinticated['password']}
                                onInput={(e) => onInputBlur(e, 'password')}
                            />
                        </div>
                        <div className="modal__input-block">
                            <input
                                type="password"
                                className="modal__repeat-password modal__input"
                                placeholder="repeat password"
                                value={Authinticated['repeatPassword']}
                                onInput={(e) => onInputBlur(e, 'repeatPassword')}
                            />
                        </div>
                        <div className="modal__input-block ">
                            <input type="submit" value="Войти" className="modal__submit-btn modal__input"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}