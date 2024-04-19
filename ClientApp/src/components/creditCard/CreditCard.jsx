import React from "react";
import './CreditCard.css';
import { separatedCardDigits } from "../cardVariant/CardVariant";

function CreditCard({ card }) {
    return (
        <div className="card__frame" >
            <div className="card__background">
                <p className="card__number">{separatedCardDigits(card.number, 4).join(' ')}</p>
                <p className="card__user">{card.initials}</p>
            </div>
        </div>
    );
}

export default CreditCard;