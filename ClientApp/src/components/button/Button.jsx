import React from "react";
import './Button.css';

function Button({ id, content, onEvent, className }) {
    return (
        <div
            className={`button ${className}`}
            id={id}
            onClick={(e) => {
                e.preventDefault();
                onEvent();
            }}
        >
            <a className="buttons__text" href={{}}>
                {content}
            </a>
        </div>
    );
}

export default Button;