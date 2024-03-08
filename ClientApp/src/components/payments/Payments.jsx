import React from "react";
import './Payments.css';
import card from '../../assets/card-icon.svg';
import CreditCard from "../creditCard/CreditCard";

const CARDS = [
    {
        number: "1111 **** **** 1111",
        user: "IVANOV IVAN"
    },
    {
        number: "2222 **** **** 2222",
        user: "IVANOV IVAN"
    },
    {
        number: "3333 **** **** 3333",
        user: "IVANOV IVAN"
    },
    {
        number: "4444 **** **** 4444",
        user: "IVANOV IVAN"
    },
    {
        number: "5555 **** **** 5555",
        user: "IVANOV IVAN"
    },
    {
        number: "6666 **** **** 6666",
        user: "IVANOV IVAN"
    },
    {
        number: "7777 **** **** 7777",
        user: "IVANOV IVAN"
    },
    {
        number: "8888 **** **** 8888",
        user: "IVANOV IVAN"
    },
    {
        number: "9999 **** **** 9999",
        user: "IVANOV IVAN"
    }
];

function Payments() {
    return (
        <div className="payments">
            <div className="payments__fluid">
                <div className="add_card__frame">
                    <div className="add_card__background">
                        <div className="add_card__content">
                            <div className="card-icon__frame">
                                <img className="card-icon" src={card} alt="Карта"/>
                            </div>
                            <p className="add_card__text">Добавить способ оплаты</p>
                        </div>
                    </div>
                </div>
                {CARDS.map((item, index) => (
                    <CreditCard card={item} />
                ))}
            </div>
        </div>
    );
}

export default Payments;