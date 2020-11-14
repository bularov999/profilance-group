import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux";
import {NewsList} from './newsList/NewsList'
import {AddNews} from "./addNews/addNews";
import './News.css'

export function News() {
    const allNewsState = useSelector(state => state.news)
    const authState = useSelector(state => state.authentication)
    const [stateNews, setStateNews] = useState([...allNewsState])
    const [searchValue, setSearchValue] = useState('')
    const [modal, setModal] = useState(false)
    useEffect(() => {
        setStateNews(state => [...allNewsState])
        if (searchValue.trim()) {
            setStateNews(state => {
                return state.filter(item => item.name.includes(searchValue.trim()))
            })
        }
    }, [searchValue, allNewsState])

    const changeSearch = function (e) {
        const target = e.target.value
        setSearchValue(target)
    }

    if (modal) {
        return (
            <AddNews activeModal={modal} setActive={setModal}/>
        )
    }
    return (
        <div className="news-block">
            <div className="news-block__head ">
                <div className="news-block__search-news-block blocks">
                    <input className="news-block__search-news" type="text" value={searchValue} onChange={changeSearch}/>
                </div>
                {authState.isAuth ?
                    (<div className="news-block__add-news-block blocks">
                        <button className="news-block__add-news-btn" onClick={() => setModal(true)}>
                            Добавить задачу
                        </button>
                    </div>) : null
                }

            </div>
            <div className="news-block__news">
                <NewsList news={stateNews}/>
            </div>
        </div>
    )
}
