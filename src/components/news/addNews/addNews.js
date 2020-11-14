import React,{useState} from 'react'
import './addNews.css'
import {useDispatch} from "react-redux";
import {addItem} from "../../../store/actions/newsActions";

export function AddNews({activeModal, setActive}) {
    const [name,setName] = useState('')
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    const disableBtn = name.trim().length &&  text.trim().length

    const submit = (e) => {
        e.preventDefault()
        dispatch(addItem(name,text))
        console.log('event')
        setActive(false)
        setName('')
        setText('')
    }

    return (
        <div className={activeModal ? "modal active" : "modal"}>
            <div className={activeModal ? "modal__content active" : "modal__content"}>
                <div className="modal__cross">
                    <span className="modal__cross-item"
                          onClick={() => setActive(false)}
                    >x</span>
                </div>
                <div className="modal__form-group">
                    <form className="modal__form" onSubmit={submit}>
                        <div className="modal__input-block">
                            <input
                                type="text"
                                className="modal__username modal__input"
                                value={name}
                                onChange={(e) => setName(e.target.value.trim())}
                            />
                        </div>
                        <div className="modal__input-block">
                            <input
                                type="text"
                                className="modal__password modal__input"
                                value={text}
                                onChange={(e) => setText(e.target.value.trim())}
                            />
                        </div>
                        <div className="modal__input-block ">
                            <input
                                type="submit"
                                value="Создать"
                                disabled={!disableBtn}
                                className="modal__submit-btn modal__input"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}