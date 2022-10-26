import "./Title.scss"
import { useState } from "react"
import { changeFilterFrom } from "../../store/filterSlice"
import { useDispatch, useSelector } from "react-redux";

export const Title = ({ header }) => {
    const dispatch = useDispatch()

    const clickHandler = (e) => {
        dispatch(changeFilterFrom(e.target.id))
    }
    return (
        <div className="title-container">
            <div className="title-header">{header}</div>
            <div className="title-content">
                <div id="all" className="direction" onClick={clickHandler}>Все</div>
                <div id="cryptocurrency" className="direction" onClick={clickHandler}>Криптовалюты</div>
                <div id="banks" className="direction" onClick={clickHandler}>Банки</div>
                <div id="cash" className="direction" onClick={clickHandler}>Наличные</div>
            </div>
        </div>
    )
}