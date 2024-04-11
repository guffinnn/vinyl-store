import React, {useState, useContext} from "react";
import './Card.css';
import play from '../../assets/play-icon.svg';
import {CartContext} from "../cartProvider/CartProvider";

function Card({ record, children, onEvent }) {
    // Storage loading image process for output skeleton
    const [isLoading, setIsLoading] = useState(true);
    // Storage a cart status
    const [cart, setCart] = useContext(CartContext);
    // Storage a status in cart
    const [inCart, setInCart] = useState(false);

    const addToCart = () => {
        // In case record in cart
        if (cart.includes(record)) {
            // Delete vinyl record
            record.count = 0;

            setInCart(false);
            setCart(cart.filter(item => item !== record));
        } else {
            // Add vinyl record
            if (record.count >= 1) {
                record.count++;
            } else {
                record.count = 1;
            }

            setInCart(true);
            setCart([...cart, record]);
        }
    }

    return (
        <div className="service__card">
            <div className="image__group">
                {isLoading && <div className="skeleton"></div>}
                <img
                    className="record__image"
                    src={record.image}
                    alt={"Винил"}
                    onLoad={() => setIsLoading(false)}
                    style={{display: isLoading ? 'none' : 'block'}}
                />
                {children}
            </div>
            <div className="content__info">
                <div className="content__heading">
                    <p className="vinyls__name">{record.name} / {record.year}</p>
                    <p className="vinyls__author">{record.artist}</p>
                </div>
                <p className="vinyls__cost">{record.price}$</p>
            </div>
            <div className="spotify__link">
                <a className="music__link" href={record.spotifyID}>Слушать в Spotify</a>
                <div className="play__frame">
                    <img className="play__icon" src={play} alt="Слушать"/>
                </div>
            </div>
            <div className={`add_to_cart__button ${cart.includes(record) ? "in__cart" : ""}`} onClick={addToCart}>
                <a className="button__text">
                    {cart.includes(record) ? "В корзине" : "Добавить в корзину"}
                </a>
            </div>
        </div>
    );
}

export default Card;