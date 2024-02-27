import React from "react";
import './Button.css';

function Button({ content }) {
    return (
        <div className="button">
            <a className="buttons__text" href={{}}>{content}</a>
        </div>
    );
}

export default Button;