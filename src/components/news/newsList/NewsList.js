import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, likedItem} from '../../../store/actions/newsActions'
import './NewsList.css'

export function NewsList({news}) {
    const authState = useSelector(state => state.authentication)
    const dispatch = useDispatch()


    if (!authState.isAuth) {
        let likedNews = news.filter(item => item.liked)
        if (likedNews.length) {
            return likedNews.reverse().map(item => {
                    return (
                        <div className="news" key={item.id}>
                            <div className="news__all">
                                <div className="news__title-block news__block">
                                    <h4 className="news__title">{item.name}</h4>
                                </div>
                                <div className="news__text-block news__block">
                                    <p className="news__text">{item.text}</p>
                                </div>
                                <div className="news__date-block news__block">
                                    <span className="news__date">{new Date(item.date).toString()}</span>
                                </div>
                            </div>
                        </div>
                    )
            })
        } else {
            return (
                <div className="news">
                    <h1>Новостей нет</h1>
                </div>)
        }
    } else if (authState.isAuth) {
        if (news.length) {
            const reverseNews = news.concat().reverse()
            return reverseNews.map(item => {
                return (
                    <div className="news" key={item.id}>
                        <div className="news__all">
                            <div className="news__title-block news__block">
                                <h4 className="news__title">{item.name}</h4>
                            </div>
                            <div className="news__text-block news__block">
                                <p className="news__text">{item.text}</p>
                            </div>
                            <div className="news__date-block news__block">
                                <span className="news__date">{new Date(item.date).toString()}</span>
                            </div>
                        </div>
                        {authState.isAuth && authState.isAdmin ? (
                            <div className="news__private">
                                <div className="news__liked-block" onClick={() => dispatch(likedItem(item.id))}>
                            <span>
                                {item.liked ? String.fromCharCode(9733) : String.fromCharCode(9734)}
                            </span>
                                </div>
                                <div className="news__delete-block" onClick={() => dispatch(deleteItem(item.id))}>
                                    <span>X</span>
                                </div>
                            </div>) : null}

                    </div>
                )
            })
        } else {
            return (
                <div className="news">
                    <h1>Новостей нет</h1>
                </div>
            )
        }
    }
}