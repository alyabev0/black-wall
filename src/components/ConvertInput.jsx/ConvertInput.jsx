import "./ConvertInput.scss"

import { Input } from "../Input/Input.jsx"
import { Dropdown } from "../Dropdown/Dropdown.jsx"
import { useSelector } from "react-redux"

export const ConvertInput = (convertOption) => {
    let items = useSelector(state => state.data.directions)

    return (
        <div className="convert-input">
            <Input placeholder={'Курс валют...'} />
            <Dropdown items={items} convertOption={convertOption} />
        </div>
    )
}