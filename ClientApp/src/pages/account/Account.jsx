import React, {useState, useEffect} from "react";
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from "../../firebase";
import './Account.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AuthSelect from "../../components/authSelect/AuthSelect";
import ModalStatus from "../../components/modalStatus/ModalStatus";
import * as Img from '../../assets/data';
import account from "../../assets/account-image.png";
import exit from "../../assets/exit-icon.svg";
import Button from "../../components/button/Button";
import Payments from "../../components/payments/Payments";
import Order from "../../components/order/Order";

const ROWS = {
        data: "Данные",
        orders: "Заказы",
        payments: "Оплата",
        likes: "Лайки"
};

const ORDERS = [
    {
        name: "#F123111333",
        date: "08.03.2024",
        cost: "336$"
    },
    {
        name: "#F123111334",
        date: "08.03.2024",
        cost: "336$"
    },
    {
        name: "#F123111335",
        date: "08.03.2024",
        cost: "336$"
    },
    {
        name: "#F123111336",
        date: "08.03.2024",
        cost: "336$"
    }
];

function Account() {
    // Storage user login status
    const [user, setUser] = useState({});
    // Storage modal view status
    const [isOpen, setIsOpen] = useState(false);
    // Storage status of modal
    const [status, setStatus] = useState(1);
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

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setStatus(1);
                setIsOpen(true);
            } else {
                setUser(null);
            }
        });
    }, []);

    // Exit from user account
    const logOut = async (e) => {
        e.preventDefault();
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header>Account</Header>
            <main className="main" id="account">
                {user ? (
                    <>
                        <aside className="account__aside">
                            <nav className="account__nav">
                                <ul id="acc__ul">
                                    {Object.keys(ROWS).map((item, index) => (
                                        <li className="account__list" key={index}>
                                            <div className="list__icon">
                                                <img className="list__image" src={Img[`${item}`]} alt="Иконка"/>
                                            </div>
                                            <p className="list__text">{ROWS[item]}</p>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </aside>
                        <section className="account__section">
                            <div id="acc__register">
                                <div className="left__content">
                                    <img className="user__icon" id="user80" src={account} alt="Пользователь"/>
                                    <div className="user__content">
                                        <p className="user__initials">{user.uid}</p>
                                        <p className="user__email">{user.email}</p>
                                    </div>
                                </div>
                                {width >= 576 ? (
                                    <div className="exit__icon" onClick={e => logOut(e)}>
                                        <img className="exit__image" src={exit} alt="Выйти" />
                                    </div>
                                ) : (
                                    <div className="exit__frame">
                                        <Button content="Выйти из аккаунта" onEvent={e => logOut(e)}/>
                                    </div>
                                )}
                            </div>
                            <div className="orders__history">
                                <div className="section__div__heading">
                                    <div className="heading__icon">
                                        <img className="heading__image" src={Img['orders']} alt="Иконка"/>
                                    </div>
                                    <p className="heading__text">История платежей</p>
                                </div>
                                <div className="orders">
                                    <div className="orders__fluid">
                                        {ORDERS.map((item, index) => (
                                            <Order order={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="payments__types">
                                <div className="section__div__heading">
                                    <div className="heading__icon">
                                        <img className="heading__image" src={Img['payments']} alt="Иконка"/>
                                    </div>
                                    <p className="heading__text">Способы оплаты</p>
                                </div>
                                <div className="payments__block">
                                    <Payments />
                                </div>
                            </div>
                        </section>

                        <ModalStatus isOpen={isOpen}
                                     setIsOpen={setIsOpen}
                                     status={status}
                        />
                    </>
                ) : (
                    <div className="authes">
                        <AuthSelect type="register"
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    status={status}
                                    setStatus={setStatus}
                        />
                        <AuthSelect type="login"
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    status={status}
                                    setStatus={setStatus}
                        />
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default Account;