import React, {useState, useEffect} from 'react';
import './Header.css';
import catalog from '../../assets/catalog-icon.svg';
import cart from '../../assets/cart-icon.svg';
import account from '../../assets/account-icon.svg';

function Header() {
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
                            <a className="header__link" href={{}}>О нас</a>
                        </li>
                        <li className="header__list">
                            <a className="header__link" href={{}}>Каталог</a>
                        </li>
                        <li className="header__list">
                            <a className="header__link" href={{}}>Корзина</a>
                            {!notification && (
                                <div className="notify">
                                    <p className="notify__text">1</p>
                                </div>
                            )}
                        </li>
                        <li className="header__list">
                            <a className="header__link" href={{}}>Аккаунт</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="heading">
                <h1 className="h1">VINYL RECORDS</h1>
                <p className="info__text">МУЗЫКА ВСЕХ ВРЕМЕН НА ЛЮБОЙ ВКУС.</p>
            </div>
        </>

    ) : (
        <>
            <header className="header">
                <nav className="header__nav">
                    <ul>
                        <li className="header__list">
                            <a className="header__link" href={{}}>
                                <div className="icon">
                                    <img className="icon__image" src={catalog} alt="Catalog"/>
                                </div>
                            </a>
                        </li>
                        <li className="header__list">
                            <a className="header__link" href={{}}>
                                <div className="icon">
                                    <img className="icon__image" src={cart} alt="Catalog"/>
                                </div>
                            </a>
                            {!notification && (
                                <div className="notify">
                                    <p className="notify__text">1</p>
                                </div>
                            )}
                        </li>
                        <li className="header__list">
                            <a className="header__link" href={{}}>
                                <div className="icon">
                                    <img className="icon__image" src={account} alt="Catalog"/>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="heading">
                <h1 className="h1">VINYL RECORDS</h1>
                <p className="info__text">МУЗЫКА ВСЕХ ВРЕМЕН НА ЛЮБОЙ ВКУС.</p>
            </div>
        </>
    );
}

export default Header;