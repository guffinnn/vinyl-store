import React from "react";
import './Button.css';

function Button({ id, content }) {
    return (
        <div className="button" id={id}>
            <a className="buttons__text" href={{}}>{content}</a>
        </div>
    );
}

export default Button;