import "./ConvertInput.scss"

import { Input } from "../Input/Input.jsx"
import { Dropdown } from "../Dropdown/Dropdown.jsx"

export const ConvertInput = () => {
    return (
        <div className="convert-input">
            <Input placeholder={'Text'} />
            <Dropdown />
        </div>
    )
}