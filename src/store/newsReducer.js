import {ADD_ITEM, DELETE_ITEM, LIKED_ITEM} from './actionTypes/newsActionTypes'

const initialState = [
    {
        id: 1,
        liked:false,
        name: 'title1',
        text:'text1',
        date: Date.now()
    },
    {
        id: 2,
        liked:false,
        name: 'title2',
        text:'text2',
        date: Date.now()
    },
    {
        id: 3,
        liked:false,
        name: 'title3',
        text:'text3',
        date: Date.now()
    }
]

export function news(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, {
                id: +Date.now() + Math.random(),
                liked: false,
                name: action.payload.name,
                text: action.payload.text,
                date: Date.now()
            }]
        case DELETE_ITEM:
            return state.filter(item => item.id !== action.payload.id)
        case LIKED_ITEM:
            return state.map(item => {
                return item.id === action.payload.id ? {...item, liked: !item.liked } : item
            })
        default:
            return state
    }
}