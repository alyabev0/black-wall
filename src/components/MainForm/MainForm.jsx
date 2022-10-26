import { ConvertInput } from "../ConvertInput.jsx/ConvertInput"
import { Title } from "../Title/Title"
import "./MainForm.scss"

export const MainForm = () => {
    return (
        <div className="main-form">
            <div className="convert-from">
                <Title header={'Отдаёте'} />
                <ConvertInput convertOption={'filterFrom'} />
            </div>
            <div className="convert-to">
                <Title header={'Получаете'} />
                <ConvertInput convertOption={'filterTo'} />
            </div>
        </div>
    )
}