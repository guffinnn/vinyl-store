import React, {useState, useContext, useCallback} from "react";
import './Card.css';
import play from '../../assets/play-icon.svg';
import { CartContext } from "../../providers/CartProvider";

function Card({ record, children, onEvent }) {
    // Storage loading image process for output skeleton
    const [isLoading, setIsLoading] = useState(true);
    // Storage a cart status
    const [cart, setCart] = useContext(CartContext);
    // Storage a status in cart
    const [inCart, setInCart] = useState(cart.includes(record));
    // Storage a status of user click on spotify link
    const [showIframe, setShowIframe] = useState(false);

    function clickHandle() {
        // In case record in cart
        if (inCart === true) {
            removeFromCart();
        } else {
            addToCart();
        }
    }

    const removeFromCart = useCallback(() => {
        record.count = 0;

        setInCart(false);
        setCart(cart.filter(item => item !== record));
    }, [record, cart, setInCart, setCart]);

    const addToCart = useCallback(() => {
        if (record.count >= 1) {
            record.count++;
        } else {
            record.count = 1;
        }

        setInCart(true);
        setCart([...cart, record]);
    }, [record, cart, setInCart, setCart]);

    // Change a play-icon by click
    const toggleIframe = () => {
        setShowIframe(!showIframe);
    }

    return (
        <div className="service__card">
            <div className="image__group">
                {isLoading && <div className="skeleton"></div>}
                <img
                    className={`record__image ${showIframe ? "unseen" : ""}`}
                    src={record.image}
                    alt={"Винил"}
                    onLoad={() => setIsLoading(false)}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
                {children}
                <iframe
                    title={record.name}
                    className={`spotify__iframe ${showIframe ? "active__iframe" : ""}`}
                    src={`https://open.spotify.com/embed/album/${record.spotifyID}?utm_source=generator`}
                    width="100%" height="352" frameBorder="0" allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
            <div className="content__info">
                <div className="content__heading">
                    <p className="vinyls__name">{record.name} / {record.year}</p>
                    <p className="vinyls__author">{record.artist}</p>
                </div>
                <p className="vinyls__cost">{record.price}$</p>
            </div>
            <div className="spotify__link" onClick={toggleIframe}>
                <a className="music__link">Слушать в Spotify</a>
                <div className={`play__frame ${showIframe ? "active__spotify" : ""}`}>
                    <img className="play__icon" src={play} alt="Слушать"/>
                </div>
            </div>
            <div
                className={`add_to_cart__button ${(inCart === true) ? "in__cart" : ""}`}
                onClick={() => clickHandle()}
            >
                <a className="button__text">
                    {(inCart === true) ? "В корзине" : "Добавить в корзину"}
                </a>
            </div>
        </div>
    );
}

export default Card;