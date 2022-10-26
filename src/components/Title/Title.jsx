import "./Title.scss"
import { useState } from "react"

export const Title = ({ header }) => {
    const [currentCategory, setCurrentCategory] = useState('all')
    const clickHandler = (e) => {
        setCurrentCategory(e.target.id)
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