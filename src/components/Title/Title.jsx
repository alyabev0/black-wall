import "./Title.scss"

export const Title = ({ header }) => {
    return (
        <div className="title-container">
            <div className="title-header">{header}</div>
            <div className="title-content">
                <div className="all direction">Все</div>
                <div className="cryptocurrency direction">Криптовалюты</div>
                <div className="banks direction">Банки</div>
                <div className="cash direction">Наличные</div>
            </div>
        </div>
    )
}