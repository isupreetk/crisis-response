import "./Button.scss";

function Button({ modifier, text, icon, ...buttonAttributes }) {
    return (
        <button
            className={`button button${modifier}`}
            {...buttonAttributes}
        >
            {icon && <img src={icon} alt="button icon"></img>}
            <div className="button__text">{text}</div>
        </button>
    );
}

export default Button;