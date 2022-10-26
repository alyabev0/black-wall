import "./Input.scss"

export const Input = ({ placeholder }) => {
    return (
        <>
            <input type="text" className="input" placeholder={placeholder} disabled></input>
        </>
    )
}