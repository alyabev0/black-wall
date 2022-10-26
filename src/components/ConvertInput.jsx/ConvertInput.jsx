import "./ConvertInput.scss"

import { Input } from "../Input/Input.jsx"
import { Dropdown } from "../Dropdown/Dropdown.jsx"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

export const ConvertInput = () => {
    // const item1 = {
    //     title: "BTC",
    //     id: 1
    // }
    // const item2 = {
    //     title: "ETH",
    //     id: 2
    // }
    // const item3 = {
    //     title: "USDTTRC",
    //     id: 3
    // }
    // const items = [item1, item2, item3]
    let items = useSelector(state => state.toolkit.directions)
    let count = useSelector(state => state.toolkit.count)
    console.log(count, items)

    useEffect(() => {
        console.log('convertinput rendered')
    }, [])

    return (
        <div className="convert-input">
            <Input placeholder={'Текст...'} />
            <Dropdown items={items} count={count} />
        </div>
    )
}