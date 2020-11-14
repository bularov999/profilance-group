import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import './Nav.css'
import {Main} from '../main/Main'
import {News} from '../news/News'
import {Auth} from '../auth/Auth'
import {useSelector,useDispatch} from "react-redux";
import {logout} from '../../store/actions/authActions'
export function Nav() {
    const [stateModal, setStateModal] = useState(false)
    const authState = useSelector(state => state.authentication)
    const dispatch = useDispatch()

    const authLogin = function (e) {
        setStateModal(true)
    }
    const authLogout = function (e) {
        dispatch(logout())
    }

    if (stateModal) {
        return (
            <Auth activeModal={stateModal} setActive={setStateModal}/>
        )
    }
    return (
        <div>
            <Router>
                <nav className="nav">
                    <ul className="nav__lists">
                        <li className="nav__list">
                            <Link className="nav__link" to="/">Главная</Link>
                        </li>
                        <li className="nav__list">
                            <Link className="nav__link" to="/news">Новости</Link>
                        </li>
                        <li className="nav__list">
                            {
                                (authState.isAuth && authState.isUser) || (authState.isAuth && authState.isAdmin) ?
                                    (<Link className="nav__link" onClick={authLogout} to="/">Выход</Link>) :
                                    (<Link className="nav__link" onClick={authLogin} to="/">Вход</Link>)
                            }
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/news">
                        <News/>
                    </Route>
                    <Route path="/" exact>
                        <Main/>
                    </Route>
                </Switch>
            </Router>

        </div>

    )
}