import React from "react";
import './CreditCard.css';

function CreditCard({ card }) {
    return (
        <div className="card__frame">
            <div className="card__background">
                <p className="card__number">{card.number}</p>
                <p className="card__user">{card.user}</p>
            </div>
        </div>
    );
}

export default CreditCard;