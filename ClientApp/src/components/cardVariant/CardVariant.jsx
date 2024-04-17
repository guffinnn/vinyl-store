import React, {useEffect, useState} from "react";
import './CardVariant.css';
import visa from "../../assets/visa.svg";
import world from "../../assets/world.svg";
import master from "../../assets/master.svg";

function CardVariant({ status, card, onClick }) {
    // Storage a payment system
    const [system, setSystem] = useState("");
    // Storage status (active/not) of card variant
    const isActive = status === 1;

    useEffect(() => {
        switch (card.number[0]) {
            case '4':
                setSystem("visa");
                break;
            case '5':
                setSystem("master");
                break;
            default:
                setSystem("world");
                break;
        }
    }, []);

    const sep = (xs, s) => xs.length ? [xs.slice(0, s), ...sep(xs.slice(s), s)] : [];

    return (
        <div className={`payment__variant__frame ${isActive ? "active__card" : ""}`} onClick={onClick}>
            <div className="card__info">
                <p className="card__number black">{sep(card.number, 4).join(' ')}</p>
                <p className="card__user black">{card.initials}</p>
            </div>
            <div className="card__illustration">
                <div className={`pay__frame ${system}__frame`}>
                    <img className="logo__pay" src={(system === "visa" && visa) || (system === "master" && master) || (system === "world" && world)} alt="Карта" />
                </div>
            </div>
        </div>
    );
}

export default CardVariant;