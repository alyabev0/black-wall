import "./ConvertInput.scss"

import { Input } from "../Input/Input.jsx"
import { Dropdown } from "../Dropdown/Dropdown.jsx"

export const ConvertInput = () => {
    const item1 = {
        title: "BTC",
        id: 1
    }
    const item2 = {
        title: "ETH",
        id: 2
    }
    const item3 = {
        title: "USDTTRC",
        id: 3
    }
    const items = [item1, item2, item3]

    return (
        <div className="convert-input">
            <Input placeholder={'Текст...'} />
            <Dropdown items={items} />
        </div>
    )
}