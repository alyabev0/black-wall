import { useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux";
import arrowIcon from "../../assets/icons/arrow-down.svg"
import "./Dropdown.scss"

const categories = {
    'all': ['BTC', 'ETH', 'USDTTRC', 'ACRUB', 'SBERRUB', 'TCSBRUB', 'CASHUSD', 'CASHRUB'],
    'cryptocurrency': ['BTC', 'ETH', 'USDTTRC'],
    'banks': ['ACRUB', 'SBERRUB', 'TCSBRUB'],
    'cash': ['CASHUSD', 'CASHRUB']
}

export const Dropdown = ({ items, convertOption }) => {

    const currencies = useSelector(state => state.filters)
    const category = useSelector(state => state.filter[convertOption.convertOption])

    const filterFunction = (items) => {
        if (convertOption.convertOption === 'filterTo') {
            // const currencyIndex = currencies.find(currency => currency.from.code === category)
        }
    }


    const [isListVisible, setIsListVisible] = useState(false)
    const [currentValue, setCurrentValue] = useState('Выбрать');


    if (!categories[category].includes(currentValue) && currentValue !== 'Выбрать') setCurrentValue('Выбрать')

    const dropdownButton = useRef(null)

    const changeBackgroundColor = e => {
        const color = e.type === 'mouseenter' ? '#fafafa' : 'white'

        if (e.target.className === 'dropdown-item') {
            e.target.style.backgroundColor = color
        } else {
            dropdownButton.current.style.backgroundColor = color
        }
    }

    const buttonClickHandler = () => {
        setIsListVisible(!isListVisible)
    }

    const itemClickHandler = (item) => {
        setCurrentValue(item.code)
        setIsListVisible(!isListVisible)
    }

    useEffect(() => {
        console.log('dropdown rendered', items, category)
    }, [])

    return (
        <>
            <div className="dropdown" style={{ borderRadius: isListVisible ? '0 4px 0 0' : '0 4px 4px 0' }}>
                <div className="dropdown-button"
                    onMouseEnter={changeBackgroundColor}
                    onMouseLeave={changeBackgroundColor}
                    onClick={buttonClickHandler}
                    ref={dropdownButton}
                >
                    <div className='dropdown-button-content'>
                        <span>{currentValue}</span>
                        <img src={arrowIcon} className="arrow-icon" width="7px" alt="arrowIcon"></img>
                    </div>
                </div>

                <ul className="dropdown-list" style={{ display: isListVisible ? 'flex' : 'none' }}>
                    {items.filter((item) => item.title !== currentValue && categories[category].includes(item.code)).map(filteredItem => (
                        <li className="dropdown-item"
                            onMouseEnter={changeBackgroundColor}
                            onMouseLeave={changeBackgroundColor}
                            onClick={() => itemClickHandler(filteredItem)}
                        >
                            {filteredItem.name}
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}