import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { changeFilterFromValue } from "../../store/filterSlice";
import arrowIcon from "../../assets/icons/arrow-down.svg"
import "./Dropdown.scss"

const categories = {
    'all': ['BTC', 'ETH', 'USDTTRC', 'ACRUB', 'SBERRUB', 'TCSBRUB', 'CASHUSD', 'CASHRUB'],
    'cryptocurrency': ['BTC', 'ETH', 'USDTTRC'],
    'banks': ['ACRUB', 'SBERRUB', 'TCSBRUB'],
    'cash': ['CASHUSD', 'CASHRUB']
}

export const Dropdown = ({ items, convertOption }) => {
    const dropdownButton = useRef(null)

    const dispatch = useDispatch()
    //удалить потом
    const state = useSelector(state => state)
    // console.log(state)


    const allCurrencies = useSelector(state => state.data.filters)
    const category = useSelector(state => state.filter[convertOption.convertOption])
    const currentValueFrom = useSelector(state => state.filter.filterFromValue)

    const [currentValue, setCurrentValue] = useState('Выбрать');

    const filterItem = (() => {
        console.log(convertOption, currentValueFrom)
        if (convertOption.convertOption === 'filterTo' && currentValueFrom !== null) {
            console.log(1, allCurrencies, currentValueFrom)
            const availableCurrencies = allCurrencies.find(currency => currency.from.code === currentValueFrom).to
            return availableCurrencies
        } else if (convertOption.convertOption === 'filterFrom') {
            console.log(2)
            const func = items.filter((item) => item.title !== currentValue && categories[category].includes(item.code))
            return func
        } else {
            console.log(3)
            const func = items.filter((item) => item.title !== currentValue)
            return func
        }
    })()

    console.log(filterItem)


    const [isListVisible, setIsListVisible] = useState(false)



    if (!categories[category].includes(currentValue) && currentValue !== 'Выбрать') setCurrentValue('Выбрать')



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
        if (convertOption.convertOption !== 'filterTo') dispatch(changeFilterFromValue(item.code))
        setIsListVisible(!isListVisible)
    }

    useEffect(() => {
        // console.log('dropdown rendered', items, category)
        // console.log('dropdown rendered', convertOption.convertOption)
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
                    {filterItem.map(filteredItem => (
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