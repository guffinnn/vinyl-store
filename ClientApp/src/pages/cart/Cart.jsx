import React from "react";
import './Cart.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Payments from "../../components/payments/Payments";
import Button from "../../components/button/Button";

function Cart() {
    return (
        <>
            <Header>Cart</Header>
            <main className="main" id="cart">
                <section className="cart">
                    <div className="cart__frame">
                        <div className="cart__fluid">

                        </div>
                    </div>
                </section>
                <aside className="cart">
                    <article className="cart__price">
                        <p className="cart__heading">Ваша корзина</p>
                        <div className="cart__status">
                            <p className="objects__count">Товары (4)</p>
                            <p className="final__price">$336</p>
                        </div>
                        <Button content={"Перейти к оформлению"} />
                    </article>
                    <article className="payments">
                        <p className="cart__heading">Платежные средства</p>
                        <Payments />
                    </article>
                </aside>
            </main>
            <Footer />
        </>
    );
}

export default Cart;