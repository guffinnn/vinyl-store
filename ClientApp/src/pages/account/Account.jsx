import React, {useState, useEffect, useContext} from "react";
import {signOut} from 'firebase/auth';
import {auth} from "../../firebase";
import './Account.css';
import * as Img from '../../assets/exports/data';
import { ROWS } from '../../assets/exports/records';
import account from "../../assets/account-image.png";
import exit from "../../assets/exit-icon.svg";
import Header, { PHONE_WIDTH, resizeHandle } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AuthSelect from "../../components/authSelect/AuthSelect";
import Button from "../../components/button/Button";
import Payments from "../../components/payments/Payments";
import Order from "../../components/order/Order";
import Card from "../../components/card/Card";
import Heart from "../../components/heart/Heart";
import ModalStatus from "../../components/modalStatus/ModalStatus";
import ModalPurchase from "../../components/modalPurchase/ModalPurchase";
import { UserContext } from "../../providers/UserProvider";
import { Link } from "react-router-dom";

function Account() {
    // Storage UserContext data
    const { user, name, likes, orders, isLoading } = useContext(UserContext);

    // Storage modalStatus view status
    const [isOpen, setIsOpen] = useState(false);
    // Storage status of modalFunctional
    const [status, setStatus] = useState(1);
    // Storage a width of user display for adaptive
    const [width, setWidth] = useState(window.innerWidth);
    // Storage modalPurchase view status
    const [purchaseIsOpen, setPurchaseIsOpen] = useState(false);
    // Storage purchase status
    const [purchaseStatus, setPurchaseStatus] = useState("add");

    // Handle resize
    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };

        resizeHandle(handleResize);
    }, []);

    function scrollEvent(item) {
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const logOut = async (e) => {
        e.preventDefault();
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return !isLoading && (
        <>
            <Header>Account</Header>
            <main className="main" id="account">
                {user ? (
                    <>
                        <section className="account__section">
                            <div id={`${Object.keys(ROWS)[0]}`}>
                                <div className="left__content">
                                    <img className="user__icon" id="user80" src={account} alt="Пользователь"/>
                                    <div className="user__content">
                                        <p className="user__initials">{name ?? "Имя пользователя"}</p>
                                        <p className="user__email">{user.email ?? "Почта пользователя"}</p>
                                    </div>
                                </div>
                                {width >= PHONE_WIDTH ? (
                                    <div className="exit__icon" onClick={e => logOut(e)}>
                                        <img className="exit__image" src={exit} alt="Выйти"/>
                                    </div>
                                ) : (
                                    <div className="exit__frame" onClick={e => logOut(e)}>
                                        <Button content="Выйти из аккаунта" />
                                    </div>
                                )}
                            </div>
                            <div id={`${Object.keys(ROWS)[1]}`} className="orders__history">
                                <div className="section__div__heading">
                                    <div className="heading__icon">
                                        <img className="heading__image" src={Img['orders']} alt="Иконка"/>
                                    </div>
                                    <p className="heading__text">История платежей</p>
                                </div>
                                <div className="orders">
                                    <div className="orders__fluid">
                                        {orders && orders.length > 0 ? (
                                            orders.map((item, index) => (
                                                <Order order={item}/>
                                            ))
                                        ) : (
                                            <div className="order__frame">
                                                <div className="order__info">
                                                    <div className="order__text">
                                                        <p className="order__name">Заказов пока нет</p>
                                                        <p className="order__date">Чтобы приобрести пластинки, перейдите на страницу каталога</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div id={`${Object.keys(ROWS)[2]}`} className="payments__types">
                                <div className="section__div__heading">
                                    <div className="heading__icon">
                                        <img className="heading__image" src={Img['payments']} alt="Иконка"/>
                                    </div>
                                    <p className="heading__text">Способы оплаты</p>
                                </div>
                                <div className="payments__block">
                                    <Payments
                                        user={user}
                                        onEvent={() => {
                                            setPurchaseIsOpen(true);
                                            setPurchaseStatus("add");
                                        }}
                                    />
                                </div>
                            </div>
                            <div id={`${Object.keys(ROWS)[3]}`} className="favorite__vinyls">
                                <div className="section__div__heading">
                                    <div className="heading__icon">
                                        <img className="heading__image" src={Img['likes']} alt="Иконка"/>
                                    </div>
                                    <p className="heading__text">Избранные пластинки</p>
                                </div>
                                <div className="favorite__frame">
                                    <div className="favorite__frame__fluid">
                                        {likes && likes.length > 0 ? (
                                            likes.map((item, index) => (
                                                <Card record={item}>
                                                    <Heart album={item} />
                                                </Card>
                                            ))
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <aside className="account__aside">
                            <nav className="account__nav">
                                <ul id="acc__ul">
                                    {Object.keys(ROWS).map((item, index) => (
                                        <Link to={`#${item}`}
                                              className="list__text"
                                              onClick={(e) => {
                                                  e.preventDefault();
                                                  scrollEvent(item);
                                              }}>
                                            <li className="account__list" key={index}>
                                                <div className="list__icon">
                                                    <img
                                                        className="list__image"
                                                        src={Img[`${item}`]}
                                                        alt="Иконка"
                                                    />
                                                </div>
                                                <p className="list__text">{ROWS[item]}</p>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </nav>
                        </aside>
                        <ModalStatus
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            status={status}
                        />
                        <ModalPurchase
                            isOpen={purchaseIsOpen}
                            setIsOpen={setPurchaseIsOpen}
                            status={purchaseStatus}
                        />
                    </>
                ) : (
                    <div className="authes">
                        <AuthSelect
                            type="register"
                            setIsOpen={setIsOpen}
                            setStatus={setStatus}
                        />
                        <AuthSelect
                            type="login"
                            setIsOpen={setIsOpen}
                            setStatus={setStatus}
                        />
                    </div>
                )}
            </main>
            <Footer/>
        </>
    );
}

export default Account;