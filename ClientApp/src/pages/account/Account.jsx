import React, {useState, useEffect, useContext, useCallback} from "react";
import {onAuthStateChanged, signOut} from 'firebase/auth';
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
import { PaymentsContext } from "../../providers/PaymentsProvider";
import { Link } from "react-router-dom";

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
    // Storage a user status
    const [user, setUser] = useContext(UserContext);
    // Storage user initials
    const [name, setName] = useState(getUserName);
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
    // Storage a likes
    const [likes, setLikes] = useState([]);
    // Storage a user credentials
    const [payments, setPayments] = useContext(PaymentsContext);

    useEffect(() => {
        checkAuthorization();
    }, []);

    function checkAuthorization() {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                getUserName();
                openModal();
            } else {
                setUser(null);
            }
        });
    }

    function getUserName() {
        fetch('https://localhost:44458/api/Users')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(item => item.email === user.email);
                setName(filteredData[0].name);
            })
            .catch(error => console.error(error));
    }

    function openModal() {
        setStatus(1);
        setIsOpen(true);
    }

    useEffect(() => {
        getPayments();
        getLikes();
    }, [user]);

    function getLikes() {
        // Working with API - Likes
        fetch('https://localhost:44458/api/Albums')
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json();
                } else {
                    throw new TypeError("Oops, we haven't got JSON!");
                }
            })
            .then(data => setLikes(data))
            .catch(error => console.error('Ошибка:', error));
    }
    function getPayments() {
        // Working with API - Payments
        fetch('https://localhost:44458/api/Payments')
            .then(response => response.json())
            .then(data => {
                let filteredData = [];
                data.forEach((card) => {
                    if (card.userID === user.email) {
                        filteredData.push(card);
                    }
                })

                setPayments(filteredData);
            })
            .catch(error => console.error(error));
    }

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
                                        {ORDERS.map((item, index) => (
                                            <Order order={item}/>
                                        ))}
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
                                        {likes.sort((a, b) => {
                                            return b.year - a.year;
                                        }).map((item, index) => (
                                            <Card record={item} image={index}>
                                                <Heart status={0}/>
                                            </Card>
                                        ))}
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
                        <ModalStatus isOpen={isOpen}
                                     setIsOpen={setIsOpen}
                                     status={status}
                        />
                        <ModalPurchase isOpen={purchaseIsOpen}
                                       setIsOpen={setPurchaseIsOpen}
                                       status={purchaseStatus}/>
                    </>
                ) : (
                    <div className="authes">
                        <AuthSelect
                            type="register"
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            status={status}
                            setStatus={setStatus}
                        />
                        <AuthSelect
                            type="login"
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            status={status}
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