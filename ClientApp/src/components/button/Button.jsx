import React from "react";
import './Button.css';

function Button({ id, content, onEvent }) {
    return (
        <div className="button" id={id} onClick={onEvent}>
            <a className="buttons__text" href={{}}>
                {content}
            </a>
        </div>
    );
}

export default Button;