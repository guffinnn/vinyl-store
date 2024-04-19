import React, {useEffect, useState} from "react";
import './CardVariant.css';
import visa from "../../assets/visa.svg";
import world from "../../assets/world.svg";
import master from "../../assets/master.svg";

// Separate numbers by 4
export const separatedCardDigits = (xs, s) => {
    return xs.length ? [xs.slice(0, s), ...separatedCardDigits(xs.slice(s), s)] : []
};

function CardVariant({ status, card, onClick }) {
    // Storage a payment system
    const [system, setSystem] = useState("");
    // Storage status (active/not) of card variant
    const isActive = status === 1;

    useEffect(() => {
        switch (card.number[0]) {
            case '4':
                setSystem(["visa", visa]);
                break;
            case '5':
                setSystem(["master", master]);
                break;
            default:
                setSystem(["world", world]);
                break;
        }
    }, []);

    return (
        <div className={`payment__variant__frame ${isActive ? "active__card" : ""}`} onClick={onClick}>
            <div className="card__info">
                <p className="card__number black">{separatedCardDigits(card.number, 4).join(' ')}</p>
                <p className="card__user black">{card.initials}</p>
            </div>
            <div className="card__illustration">
                <div className={`pay__frame ${system[0]}__frame`}>
                    <img className="logo__pay" src={system[1]} alt="Карта" />
                </div>
            </div>
        </div>
    );
}

export default CardVariant;