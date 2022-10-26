import "./ConvertInput.scss"

import { Input } from "../Input/Input.jsx"
import { Dropdown } from "../Dropdown/Dropdown.jsx"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export const ConvertInput = (convertOption) => {
    let items = useSelector(state => state.data.directions)

    useEffect(() => {
        console.log('convertinput rendered')
    }, [])

    return (
        <div className="convert-input">
            <Input placeholder={'Курс валют...'} />
            <Dropdown items={items} convertOption={convertOption} />
        </div>
    )
}