import { useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { changeFilterFromValue } from "../../store/filterSlice";
import arrowIcon from "../../assets/icons/arrow-down.svg"
import "./Dropdown.scss"

const categories = {
    'all': ['BTC', 'ETH', 'USDTTRC', 'ACRUB', 'SBERRUB',
        'TCSBRUB', 'CASHUSD', 'CASHRUB', 'TRX', 'PMUSD',
        'P24UAH', 'CARDUAH', 'CARDUAH', 'CARDRUB', 'QWRUB',
        'WIREUAH', 'OSDBUAH', 'CNTRUB', 'CASHAED'],
    'cryptocurrency': ['BTC', 'ETH', 'USDTTRC', 'TRX'],
    'banks': ['ACRUB', 'SBERRUB', 'TCSBRUB', 'PMUSD', 'P24UAH', 'CARDUAH', 'CARDRUB', 'QWRUB', 'WIREUAH', 'OSDBUAH', 'CNTRUB'],
    'cash': ['CASHUSD', 'CASHRUB', 'CASHAED']
}

export const Dropdown = ({ items, convertOption }) => {
    const dropdownButton = useRef(null)
    const [isListVisible, setIsListVisible] = useState(false)

    const dispatch = useDispatch()

    const allCurrencies = useSelector(state => state.data.filters)
    const category = useSelector(state => state.filter[convertOption.convertOption])
    const filterFromValue = useSelector(state => state.filter.filterFromValue)
    const filterTo = useSelector(state => state.filter.filterTo)

    const [currentValue, setCurrentValue] = useState('Выбрать');

    const filteredItems = (() => {
        if (convertOption.convertOption === 'filterTo' && filterFromValue !== null) {
            const availableCurrencies = allCurrencies.find(currency => currency.from.code === filterFromValue).to
            const validCurrencies = availableCurrencies.filter(currency => categories[filterTo].includes(currency.code))
            return validCurrencies
        } else if (convertOption.convertOption === 'filterFrom') {
            const validCurrencies = items.filter((item) => item.title !== currentValue && categories[category].includes(item.code))
            return validCurrencies
        } else {
            const validCurrencies = items.filter((item) => item.title !== currentValue)
            return validCurrencies
        }
    })()
    const filteredItemsCodes = filteredItems.map(filteredItem => filteredItem.code)

    // при данных условиях выбранная валюта в дропдауне сбрасывается
    if (currentValue !== "Выбрать" && !filteredItemsCodes.includes(currentValue)) setCurrentValue("Выбрать")
    if (!categories[category].includes(currentValue) &&
        currentValue !== 'Выбрать') setCurrentValue('Выбрать')
    if (filterFromValue === null && currentValue !== "Выбрать" && convertOption.convertOption === 'filterTo') setCurrentValue("Выбрать")
    if (filterFromValue !== currentValue && currentValue !== "Выбрать" && convertOption.convertOption === 'filterFrom') setCurrentValue("Выбрать")

    const changeBackgroundColor = e => {
        const color = e.type === 'mouseenter' ? '#fafafa' : 'white'

        if (e.target.className === 'dropdown-item') {
            e.target.style.backgroundColor = color
        } else {
            dropdownButton.current.style.backgroundColor = color
        }
    }

    const buttonClickHandler = () => {
        if ((filterFromValue === "Выбрать" || filterFromValue === null) && convertOption.convertOption === 'filterTo') return
        setIsListVisible(!isListVisible)
    }

    const itemClickHandler = (item) => {
        setCurrentValue(item.code)
        if (convertOption.convertOption !== 'filterTo') dispatch(changeFilterFromValue(item.code))
        setIsListVisible(!isListVisible)
    }

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
                    {filteredItems.map(filteredItem => (
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