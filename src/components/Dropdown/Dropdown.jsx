import "./Dropdown.scss"

export const Dropdown = ({ items }) => {
    const clickHandler = (e) => {

    }

    return (
        <>
            <div className="dropdown">
                <div className="dropdown-title">BTC</div>
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