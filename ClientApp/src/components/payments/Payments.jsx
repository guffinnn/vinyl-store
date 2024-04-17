import React, { useState, useEffect, useContext } from "react";
import './Payments.css';
import card from '../../assets/card-icon.svg';
import CreditCard from "../creditCard/CreditCard";
import { UserContext } from "../../providers/UserProvider";
import { PaymentsContext } from "../../providers/PaymentsProvider";

function Payments({ onEvent }) {
    // Storage a user credit payments
    const [payments, setPayments] = useContext(PaymentsContext);

    return (
        <div className="payments">
            <div className="payments__fluid">
                <div className="add_card__frame" onClick={onEvent}>
                    <div className="add_card__background">
                        <div className="add_card__content">
                            <div className="card-icon__frame">
                                <img className="card-icon" src={card} alt="Карта"/>
                            </div>
                            <p className="add_card__text">Добавить способ оплаты</p>
                        </div>
                    </div>
                </div>
                {payments.sort((a, b) => {
                    return a.number - b.number;
                }).map((item) => (
                    <CreditCard card={item} />
                ))}
            </div>
        </div>
    );
}

export default Payments;