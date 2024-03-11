import React, {useState, useEffect} from "react";
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from "../../firebase";
import './Account.css';
import * as Img from '../../assets/data';
import account from "../../assets/account-image.png";
import exit from "../../assets/exit-icon.svg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AuthSelect from "../../components/authSelect/AuthSelect";
import Button from "../../components/button/Button";
import Payments from "../../components/payments/Payments";
import Order from "../../components/order/Order";
import Card from "../../components/card/Card";
import Heart from "../../components/heart/Heart";
import ModalStatus from "../../components/modalStatus/ModalStatus";
import ModalPurchase from "../../components/modalPurchase/ModalPurchase";
import {RECORDS} from "../../assets/records/records";
import {Link} from "react-router-dom";

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
                        <section className="account__section">
                            <div id={`${Object.keys(ROWS)[0]}`}>
                                <div className="left__content">
                                    <img className="user__icon" id="user80" src={account} alt="Пользователь"/>
                                    <div className="user__content">
                                        <p className="user__initials">{user.uid}</p>
                                        <p className="user__email">{user.email}</p>
                                    </div>
                                </div>
                                {width >= 576 ? (
                                    <div className="exit__icon" onClick={e => logOut(e)}>
                                        <img className="exit__image" src={exit} alt="Выйти"/>
                                    </div>
                                ) : (
                                    <div className="exit__frame">
                                        <Button content="Выйти из аккаунта" onEvent={e => logOut(e)}/>
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
                                    <Payments onEvent={() => {
                                        setPurchaseIsOpen(true);
                                        setPurchaseStatus("add");
                                    }}/>
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
                                        {RECORDS.map((item, index) => (
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
                                              onClick={(event) => {
                                                  event.preventDefault();
                                                  const element = document.getElementById(item);
                                                  if (element) {
                                                      element.scrollIntoView({behavior: 'smooth'});
                                                  }
                                              }}
                                        >
                                            <li className="account__list" key={index}>
                                                <div className="list__icon">
                                                    <img className="list__image" src={Img[`${item}`]} alt="Иконка"/>
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
            <Footer/>
        </>
    );
}

export default Account;