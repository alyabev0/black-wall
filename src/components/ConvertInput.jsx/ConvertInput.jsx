import "./ConvertInput.scss"

import { Input } from "../Input/Input.jsx"
import { Dropdown } from "../Dropdown/Dropdown.jsx"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

export const ConvertInput = () => {
    let items = useSelector(state => state.toolkit.directions)

    useEffect(() => {
        console.log('convertinput rendered')
    }, [])

    return (
        <div className="convert-input">
            <Input placeholder={'Текст...'} />
            <Dropdown items={items} />
        </div>
    )
}