import React from "react";
import './CreditCard.css';

function CreditCard({ card }) {
    const sep = (xs, s) => xs.length ? [xs.slice(0, s), ...sep(xs.slice(s), s)] : [];

    return (
        <div className="card__frame" >
            <div className="card__background">
                <p className="card__number">{sep(card.number, 4).join(' ')}</p>
                <p className="card__user">{card.initials}</p>
            </div>
        </div>
    );
}

export default CreditCard;