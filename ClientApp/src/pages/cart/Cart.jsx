import React, {useState, useEffect, useContext} from "react";
import './Cart.css';
import basket from '../../assets/basket-icon.svg';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Payments from "../../components/payments/Payments";
import Button from "../../components/button/Button";
import Position from "../../components/position/Position";
import ModalPurchase from "../../components/modalPurchase/ModalPurchase";
import { CartContext } from "../../providers/CartProvider";
import { UserContext } from "../../providers/UserProvider";

function Cart() {
    // Storage modalPurchase view status
    const [purchaseIsOpen, setPurchaseIsOpen] = useState(false);
    // Storage purchase status
    const [purchaseStatus, setPurchaseStatus] = useState("add");
    // Storage a cart status
    const [cart, setCart] = useContext(CartContext);
    // Storage a user status
    const [user, setUser] = useContext(UserContext);
    // Storage total price of cart
    const [totalPrice, setTotalPrice] = useState(getPrice);

    useEffect(() => {
        setTotalPrice(getPrice);
    }, [cart]);

    // Count summary price of cart
    function getPrice() {
        let sum = 0;
        cart.forEach((item) => {
            sum += (item.count * item.price)
        });

        return sum.toFixed(2);
    }; 

    return (
        <>
            <Header>Cart</Header>
            <main className="main" id="cart">
                <section className="cart">
                    <div className="cart__frame">
                        <div className="cart__fluid">
                            {cart.length > 0 ? (
                                cart.map((item, index) => (
                                    <Position
                                        record={item}
                                        image={index}
                                        onChange={() => setTotalPrice(getPrice)}
                                    />
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
                {cart.length > 0 && (
                    <aside className="cart">
                        <article className="cart__price">
                            <p className="cart__heading">Ваша корзина</p>
                            <div className="cart__status">
                                <p className="objects__count">Товары ({cart.length})</p>
                                <p className="final__price">{totalPrice}$</p>
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
                            <Payments
                                user={user}
                                onEvent={() => {
                                    setPurchaseIsOpen(true);
                                    setPurchaseStatus("add");
                                }}
                            />
                        </article>
                    </aside>
                )}
            </main>
            <ModalPurchase
                isOpen={purchaseIsOpen}
                setIsOpen={setPurchaseIsOpen}
                status={purchaseStatus}
                setStatus={setPurchaseStatus}
                totalPrice={totalPrice}
            />
            <Footer/>
        </>
    );
}

export default Cart;