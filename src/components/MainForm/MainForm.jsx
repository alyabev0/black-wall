import { ConvertInput } from "../ConvertInput.jsx/ConvertInput"
import { Title } from "../Title/Title"
import "./MainForm.scss"

export const MainForm = () => {
    return (
        <div className="main-form">
            <Title header={'Отдаёте'} />
            <ConvertInput />
        </div>
    )
}