import "./Dropdown.scss"

export const Dropdown = ({ items }) => {
    const clickHandler = (e) => {

    }

    const mouseEnterHandler = (e) => {
        e.target.style.backgroundColor = '#fafafa'
    }

    const mouseLeaveHandler = (e) => {
        e.target.style.backgroundColor = 'white'
    }

    return (
        <>
            <div className="dropdown" >
                <div className="dropdown-title"
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}>
                    BTC
                </div>

                <div className="dropdown-button" onClick={clickHandler}></div>

                <ul className="dropdown-items">
                    {items.map((item) =>
                        <li className="dropdown-item">{item.title}</li>
                    )}
                </ul>
            </div>
        </>
    )
}