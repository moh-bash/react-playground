export function Button({text, children}) {
    return (
        <button className="button">
            <p>{text}</p>
            {children}
        </button>
    )
}