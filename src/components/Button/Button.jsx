import "./Button.scss";
//TODO change styling appropriately
function Button({ modifier, text, icon, ...buttonAttributes }) {
    return (
        <button
            className={`button button${modifier}`}
            {...buttonAttributes}
        >
            <div className="button__text">{text}</div>
        </button>
    );
}

export default Button;