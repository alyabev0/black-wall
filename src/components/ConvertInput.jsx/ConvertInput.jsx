import "./ConvertInput.scss"

import { Input } from "../Input/Input.jsx"
import { Dropdown } from "../Dropdown/Dropdown.jsx"

export const ConvertInput = () => {
    const item1 = {
        title: "BTC",
        value: 228
    }
    const item2 = {
        title: "ETH",
        value: 1337
    }
    const item3 = {
        title: "USDTTRC",
        value: 1337
    }
    const items = [item1, item2, item3]

    return (
        <div className="convert-input">
            <Input placeholder={'Text'} />
            <Dropdown items={items} />
        </div>
    )
}