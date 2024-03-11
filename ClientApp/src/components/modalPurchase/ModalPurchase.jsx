import React, {useState} from "react";
import './ModalPurchase.css';
import {IMaskInput} from 'react-imask';
import Button from "../button/Button";

function ModalPurchase({ isOpen, setIsOpen, status }) {
    // Storage a card number data
    const [number, setNumber] = useState("");
    // Storage a user initials
    const [user, setUser] = useState("");
    // Storage a card expiry
    const [cardExpiry, setCardExpiry] = useState("");
    // Storage a cvv number
    const [cvv, setCVV] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Save the form data here
        const formData = {
            number,
            user,
            cardExpiry,
            cvv
        };

        console.log(formData);
    };

    return (isOpen && status === "add") ? (
        <>
            <div className="modal__purchase">
                <div className="modal__text">
                    <p className="text__head">Добавление способа оплаты</p>
                    <p className="text__info">Введите информацию с карты</p>
                </div>
                <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="labels__frame">
                        <label className="label" htmlFor="1">Номер карты</label>
                        <label className="label" htmlFor="2">Владелец</label>
                        <label className="label" htmlFor="3">Срок действия</label>
                        <label className="label" htmlFor="4">CVV</label>
                    </div>
                    <div className="inputs__frame">
                        <IMaskInput
                            mask="0000 0000 0000 0000"
                            unmask={true}
                            placeholder="1111 **** **** 1111"
                            id="1"
                            className="input"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <input className="input"
                               type="text"
                               id="2"
                               placeholder="IVANOV IVAN"
                               value={user}
                               onChange={(e) => setUser(e.target.value)}
                        />
                        <IMaskInput
                            mask="00/00"
                            unmask={true}
                            placeholder="11/28"
                            id="3"
                            className="input"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                        />
                        <IMaskInput
                            mask="000"
                            unmask={true}
                            placeholder="***"
                            id="4"
                            type="password"
                            className="input"
                            value={cvv}
                            onChange={(e) => setCVV(e.target.value)}
                        />
                    </div>
                    <div className="button__frame" id="submit">
                        <Button content="Привязать карту" type="submit" onEvent={(e) => handleFormSubmit(e)}/>
                    </div>
                </form>
            </div>
            <div className="modal__wrapper" onClick={() => setIsOpen(false)}></div>
        </>
    ) : null;
}

export default ModalPurchase;