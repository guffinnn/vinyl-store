import React from "react";
import './CardVariant.css';
import visa from "../../assets/visa.svg";
import world from "../../assets/world.svg";
import master from "../../assets/master.svg";

function CardVariant({ status, method }) {
    return (
        <div className={`payment__variant__frame ${status ? "active__card" : ""}`}>
            <div className="card__info">
                <p className="card__number black">1111 **** **** 1111</p>
                <p className="card__user black">IVANOV IVAN</p>
            </div>
            <div className="card__illustration">
                <div className={`pay__frame ${method}__frame`}>
                    <img className="logo__pay" src={(method === "visa" && visa) || (method === "master" && master) || (method === "world" && world)} alt="Карта" />
                </div>
            </div>
        </div>
    );
}

export default CardVariant;