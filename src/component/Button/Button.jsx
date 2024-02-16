import './Button.scss'



function Button(props) {
    return (
        <button
            className={props.type ? 'btn out-line' : 'btn'}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    )
}

export default Button;