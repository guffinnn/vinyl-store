import React, {useState} from "react";
import './ModalPurchase.css';
import {IMaskInput} from 'react-imask';
import Button from "../button/Button";
import CardVariant from "../cardVariant/CardVariant";
import master from "../../assets/master.svg";
import add from "../../assets/add-icon.svg";

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

    return isOpen ? (
        <>
            <div className="modal__purchase">
                <div className="modal__text">
                    <p className="text__head">{status === "add" ? "Добавление способа оплаты" : "Оформление заказа"}</p>
                    <p className="text__info">{status === "add" ? "Введите информацию с карты" : "Подтвердите действия перед оплатой"}</p>
                </div>
                {status === "add" && (
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
                )}
                {status === "purchase" && (
                    <>
                        <div className="payments__frame">
                            <CardVariant status={0} method={"visa"}/>
                            <CardVariant status={0} method={"world"}/>
                            <div className="payment__variant__frame">
                                <div className="add__info">
                                    <img className="add__img" src={add} alt="Добавить"/>
                                    <p className="add__text">Добавить способ оплаты</p>
                                </div>
                                <div className="card__illustration">
                                    <div className="pay__frame master__frame">
                                        <img className="logo__pay" src={master} alt="Карта"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart__cost">
                            <p className="cart__text">Итого</p>
                            <p className="cart__text">$336</p>
                        </div>
                        <div className="cart__cost">
                            <p className="cart__text">Доставка</p>
                            <p className="cart__text deliver">Бесплатно</p>
                        </div>
                        <div className="purchase__frame">
                            <div className="checkbox-wrapper-46">
                                <input type="checkbox" id="cbx-46" className="inp-cbx"/>
                                <label htmlFor="cbx-46" className="cbx">
                                    <span>
                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <p className="label__text">
                                        Согласен с условиями <p>Правил пользования</p> и <p>правилами возврата</p>
                                    </p>
                                </label>
                            </div>
                            <Button content={"Оплатить корзину"}/>
                        </div>
                    </>
                )}
            </div>
            <div className="modal__wrapper" onClick={() => setIsOpen(false)}></div>
        </>
    ) : null;
}

export default ModalPurchase;