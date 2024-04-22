import React, { memo } from "react";
import './Button.css';

const Button = memo(({ id, content, onEvent, className }) => {
    return (
        <div
            className={`button ${className}`}
            id={id}
            onClick={(e) => {
                try {
                    e.preventDefault();
                    onEvent();
                } catch(exception) { // Exception for Account page and AuthSelect components
                    console.log(exception);
                }
            }}
        >
            <a className="buttons__text" href={{}}>
                {content}
            </a>
        </div>
    );
});

export default Button;