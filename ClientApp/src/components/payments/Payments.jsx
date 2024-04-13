import React, { useState, useEffect, useContext } from "react";
import './Payments.css';
import card from '../../assets/card-icon.svg';
import CreditCard from "../creditCard/CreditCard";
import { UserContext } from "../../providers/UserProvider";

function Payments({ onEvent }) {
    // Storage a user credit cards
    const [cards, setCards] = useState([]);
    // Storage a user status
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        // Read user name from API
        fetch('https://localhost:44458/api/Payments')
            .then(response => response.json())
            .then(data => {
                let filteredData = [];
                data.forEach((card) => {
                    if (card.userID === user.email) {
                        filteredData.push(card);
                    }
                })

                setCards(filteredData);
            })
            .catch(error => console.error(error));
    }, []);

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
                {cards.map((item) => (
                    <CreditCard card={item} />
                ))}
            </div>
        </div>
    );
}

export default Payments;