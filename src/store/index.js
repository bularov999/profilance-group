import {combineReducers} from 'redux'
import {createStore} from 'redux'
import {authentication} from './authReducer'
import {news} from './newsReducer'

const rootReducer = combineReducers({
    authentication,
    news
})

export const store = createStore(rootReducer)