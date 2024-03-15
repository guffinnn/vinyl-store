import React, {useState} from "react";
import './Cart.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Payments from "../../components/payments/Payments";
import Button from "../../components/button/Button";
import Position from "../../components/position/Position";
import {CART, RECORDS} from "../../assets/records/records";
import basket from '../../assets/basket-icon.svg';
import ModalPurchase from "../../components/modalPurchase/ModalPurchase";

function Cart() {
    // Storage modalPurchase view status
    const [purchaseIsOpen, setPurchaseIsOpen] = useState(false);
    // Storage purchase status
    const [purchaseStatus, setPurchaseStatus] = useState("add");

    return (
        <>
            <Header>Cart</Header>
            <main className="main" id="cart">
                <section className="cart">
                    <div className="cart__frame">
                        <div className="cart__fluid">
                            {CART.length > 0 ? (
                                RECORDS.map((item, index) => (
                                    <Position record={item} image={index} />
                            ))) : (
                                <div className="error__container">
                                    <div className="error__image">
                                        <img alt="Error" src={basket} className="image__content"/>
                                    </div>
                                    <div className="error__info">
                                        <p className="error__head">Корзина пуста</p>
                                        <p className="error__text">Вы можете выбрать товары в каталоге</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                {CART.length > 0 && (
                    <aside className="cart">
                        <article className="cart__price">
                            <p className="cart__heading">Ваша корзина</p>
                            <div className="cart__status">
                                <p className="objects__count">Товары (4)</p>
                                <p className="final__price">$336</p>
                            </div>
                            <Button
                                id="success"
                                content={"Перейти к оформлению"}
                                onEvent={() => {
                                    setPurchaseIsOpen(true);
                                    setPurchaseStatus("purchase");
                                }}
                            />
                        </article>
                        <article className="payments">
                            <p className="cart__heading">Платежные средства</p>
                            <Payments onEvent={() => {
                                setPurchaseIsOpen(true);
                                setPurchaseStatus("add");
                            }} />
                        </article>
                    </aside>
                )}
            </main>
            <ModalPurchase isOpen={purchaseIsOpen}
                           setIsOpen={setPurchaseIsOpen}
                           status={purchaseStatus}
            />
            <Footer/>
        </>
    );
}

export default Cart;