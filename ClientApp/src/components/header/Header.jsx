import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import catalog from '../../assets/catalog-icon.svg';
import cart from '../../assets/cart-icon.svg';
import account from '../../assets/account-icon.svg';
import {CartContext} from "../cartProvider/CartProvider";

function Header({ children }) {
    // Storage a width of user display for adaptive
    const [width, setWidth] = useState(window.innerWidth);
    // Storage a cart status
    const [cartNotify, setCartNotify] = useContext(CartContext);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width >= 576 ? (
        <>
            <header className="header">
                <nav className="header__nav">
                    <ul>
                        <Link to="/vinyl-store">
                            <li className="header__list">
                                <a className="header__link" href="/vinyl-store">О нас</a>
                            </li>
                        </Link>
                        <Link to="/catalog">
                            <li className="header__list">
                                <a className="header__link" href="/catalog">Каталог</a>
                            </li>
                        </Link>
                        <Link to="/cart">
                            <li className="header__list">
                                <a className="header__link" href="/cart">Корзина</a>
                                {cartNotify.length > 0 && (
                                    <div className="notify">
                                        <p className="notify__text">1</p>
                                    </div>
                                )}
                            </li>
                        </Link>
                        <Link to="/account">
                            <li className="header__list">
                                <a className="header__link" href="/account">Аккаунт</a>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </header>
            <div className="heading">
            <h1 className="h1">{children}</h1>
                <p className="info__text">МУЗЫКА ВСЕХ ВРЕМЕН НА ЛЮБОЙ ВКУС.</p>
            </div>
        </>

    ) : (
        <>
            <header className="header">
                <nav className="header__nav">
                    <ul>
                        <Link to="/catalog">
                            <li className="header__list">
                                <a className="header__link" href="/catalog">
                                    <div className="icon">
                                        <img className="icon__image" src={catalog} alt="Catalog"/>
                                    </div>
                                </a>
                            </li>
                        </Link>
                        <Link to="/cart">
                            <li className="header__list">
                                <a className="header__link" href="/cart">
                                    <div className="icon">
                                        <img className="icon__image" src={cart} alt="Cart"/>
                                    </div>
                                </a>
                                {cartNotify.length > 0 && (
                                    <div className="notify">
                                        <p className="notify__text">1</p>
                                    </div>
                                )}
                            </li>
                        </Link>
                        <Link to="/account">
                            <li className="header__list">
                                <a className="header__link" href="/account">
                                    <div className="icon">
                                        <img className="icon__image" src={account} alt="Account"/>
                                    </div>
                                </a>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </header>
            <div className="heading">
                <h1 className="h1">{children}</h1>
                <p className="info__text">МУЗЫКА ВСЕХ ВРЕМЕН НА ЛЮБОЙ ВКУС.</p>
            </div>
        </>
    );
}

export default Header;