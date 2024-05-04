import React, { useContext } from "react";
import './Payments.css';
import card from '../../assets/card-icon.svg';
import CreditCard from "../creditCard/CreditCard";
import { UserContext } from "../../providers/UserProvider";

function Payments({ onEvent }) {
    // Storage a user credit payments
    const { payments } = useContext(UserContext);

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
                {payments && payments.length > 0 ? (
                    payments.sort((a, b) => {
                        return a.number - b.number;
                    }).map((item) => (
                        <CreditCard card={item} />
                    ))
                ) : null}
            </div>
        </div>
    );
}

export default Payments;