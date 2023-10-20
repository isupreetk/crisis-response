import "./Button.scss";
//TODO change styling appropriately
function Button({ modifier, text, icon, ...buttonAttributes }) {
    return (
        <button
            className={`btn btn${modifier}`}
            {...buttonAttributes}
        >
            <div className={icon && "btn__text"}>{text}</div>
        </button>
    );
}

export default Button;