import React, {useState, useContext} from "react";
import './ModalPurchase.css';
import {IMaskInput} from 'react-imask';
import Button from "../button/Button";
import CardVariant from "../cardVariant/CardVariant";
import master from "../../assets/master.svg";
import add from "../../assets/add-icon.svg";
import { UserContext } from "../../providers/UserProvider";
import { CartContext } from "../../providers/CartProvider";
import { postPayments, postOrders, getUserID } from '../../pages/api';
import success from '../../assets/success-icon.svg';

function ModalPurchase({ isOpen, setIsOpen, status, setStatus, totalPrice }) {
    // Storage a user credit payments
    const { payments, user } = useContext(UserContext);
    // Storage a cart
    const [cart, setCart] = useContext(CartContext);

    // Storage a user initials
    const [initials, setInitials] = useState("");
    // Storage a card number data
    const [number, setNumber] = useState("");
    // Storage a card expiry
    const [cardExpiry, setCardExpiry] = useState("");
    // Storage a cvv number
    const [cvv, setCVV] = useState("");
    // Storage status of input
    const [isChoosed, setIsChoosed] = useState(false);
    // Storage a active cardPosition component
    const [activeIndex, setActiveIndex] = useState("");
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let payment = {
            userID: user.email,
            number: number.split(' ').join(''),
            expiry: cardExpiry.split('/').join(''),
            cvv: Number(cvv),
            initials: initials.toUpperCase()
        };

        postPayments(payment); // Call post API function
        payments.push(payment);

        setStatus("success");
    };

    const handleOrderConfirmed = async () => {
        if (isChoosed === true && !isNaN(activeIndex)) {
            let userID = await Promise.resolve(getUserID(user));

            postOrders(userID, cart);
        }
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
                            <input
                                className="input"
                                type="text"
                                id="2"
                                placeholder="IVANOV IVAN"
                                value={initials}
                                onChange={(e) => setInitials(e.target.value)}
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
                        <div className="button__frame" id="submit" >
                            <input type="submit" value="Привязать карту" class="add__pay__button" />
                        </div>
                    </form>
                )}
                {status === "success" && (
                    <div className="modal__container">
                        <div className="modal__content">
                            <div className="status__icon">
                                <img className="status__image" src={success} alt="Статус" />
                            </div>
                            <div className="modal__text">
                                <p className="text__head">{"Успешно"}</p>
                                <p className="text__info">{"Новый способ оплаты добавлен"}</p>
                            </div>
                        </div>
                    </div>
                )}
                {status === "purchase" && (
                    <>
                        <div className="payments__frame">
                            {payments.sort((a, b) => {
                                return a.number - b.number;
                            }).map((item, index) => (
                                <CardVariant
                                    key={index}
                                    status={index === activeIndex ? 1 : 0}
                                    card={item}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                            <div
                                className="payment__add__frame"
                                onClick={() => {
                                    setStatus("add");
                                }}
                            >
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
                            <p className="cart__text">{totalPrice}$</p>
                        </div>
                        <div className="cart__cost">
                            <p className="cart__text">Доставка</p>
                            <p className="cart__text deliver">Бесплатно</p>
                        </div>
                        <div className="purchase__frame">
                            <div className="checkbox-wrapper-46">
                                <input
                                    type="checkbox"
                                    id="cbx-46"
                                    className="inp-cbx"
                                    onClick={(e) => setIsChoosed(e.target.checked)}
                                />
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
                            <Button
                                content={"Оплатить корзину"}
                                className={`${(isChoosed !== true) ? "in__cart" : ""}`}
                                onEvent={() => handleOrderConfirmed()}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className="modal__wrapper" onClick={() => setIsOpen(false)}></div>
        </>
    ) : null;
}

export default ModalPurchase;