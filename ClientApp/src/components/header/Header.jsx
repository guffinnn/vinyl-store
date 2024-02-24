import React, {useState, useEffect} from 'react';
import './Header.css';
import catalog from '../../assets/catalog-icon.svg';
import cart from '../../assets/cart-icon.svg';
import account from '../../assets/account-icon.svg';

function Header({ children }) {
    // Storage a notification status
    const [notification, setNotification] = useState(false);
    // Storage a width of user display for adaptive
    const [width, setWidth] = useState(window.innerWidth);

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
                        <li className="header__list">
                            <a className="header__link" href="/vinyl-store">О нас</a>
                        </li>
                        <li className="header__list">
                            <a className="header__link" href="/catalog">Каталог</a>
                        </li>
                        <li className="header__list">
                            <a className="header__link" href="/cart">Корзина</a>
                            {!notification && (
                                <div className="notify">
                                    <p className="notify__text">1</p>
                                </div>
                            )}
                        </li>
                        <li className="header__list">
                            <a className="header__link" href="/account">Аккаунт</a>
                        </li>
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
                        <li className="header__list">
                            <a className="header__link" href="/catalog">
                                <div className="icon">
                                    <img className="icon__image" src={catalog} alt="Catalog"/>
                                </div>
                            </a>
                        </li>
                        <li className="header__list">
                            <a className="header__link" href="/cart">
                                <div className="icon">
                                    <img className="icon__image" src={cart} alt="Cart"/>
                                </div>
                            </a>
                            {!notification && (
                                <div className="notify">
                                    <p className="notify__text">1</p>
                                </div>
                            )}
                        </li>
                        <li className="header__list">
                            <a className="header__link" href="/account">
                                <div className="icon">
                                    <img className="icon__image" src={account} alt="Account"/>
                                </div>
                            </a>
                        </li>
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