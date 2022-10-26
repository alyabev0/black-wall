import "./Title.scss"
import { useReducer, useState } from "react"
import { changeFilterFrom, changeFilterTo } from "../../store/filterSlice"
import { useDispatch, useSelector } from "react-redux";

export const Title = ({ header, convertOption }) => {
    console.log(convertOption)
    const dispatch = useDispatch()

    const changeFilterStyles = (prevState, action) => {
        action.payload.style.backgroundColor = "#f0807f"
        action.payload.style.color = "white"
        if (prevState !== action.payload && prevState !== null) {
            prevState.style.backgroundColor = ""
            prevState.style.color = ""
        }
        return action.payload
    }

    const [currentFilter, dispatchCurrentFilter] = useReducer(changeFilterStyles, null)

    const clickHandler = (e) => {
        console.log(convertOption)
        if (convertOption === 'filterFrom' || undefined) {
            dispatch(changeFilterFrom(e.target.id))
        } else if (convertOption === 'filterTo' || undefined) {
            dispatch(changeFilterTo(e.target.id))
        }

        dispatchCurrentFilter({ type: 'changeFilter', payload: e.target })
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