import "./ConvertInput.scss"

import { Input } from "../Input/Input.jsx"
import { Dropdown } from "../Dropdown/Dropdown.jsx"

export const ConvertInput = () => {
    const item1 = {
        title: "item1",
        value: 228
    }
    const item2 = {
        title: "item2",
        value: 1337
    }
    const item3 = {
        title: "item2",
        value: 1337
    }
    const item4 = {
        title: "item2",
        value: 1337
    }
    const item5 = {
        title: "item2",
        value: 1337
    }
    const items = [item1, item2, item3, item4, item5]

    return (
        <div className="convert-input">
            <Input placeholder={'Text'} />
            <Dropdown items={items} />
        </div>
    )
}