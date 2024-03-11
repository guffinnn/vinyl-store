import React, {useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../../firebase";
import './AuthSelect.css';
import account from  '../../assets/account-image.png';
import arrow from '../../assets/arrow-icon.svg';
import Button from "../button/Button";
import ModalStatus from "../modalStatus/ModalStatus";

function AuthSelect({ type, isOpen, setIsOpen, status, setStatus }) {
    // Storage a status of user click
    const [showForm, setShowForm] = useState(false);
    // Storage user initials
    const [name, setName] = useState("");
    // Storage user email
    const [login, setLogin] = useState("");
    // Storage user password
    const [password, setPassword] = useState("");
    // Storage modalFunctional view status
    const [isOPEN, setIsOPEN] = useState(false);
    // Storage status of modalFunctional
    const [STATUS, setSTATUS] = useState(1);

    // Change a menu-icon by click
    const toggleForm = () => {
        setShowForm(!showForm);
    }

    // Register a new user
    const register = async (e) => {
        e.preventDefault();
        try {
            const user = createUserWithEmailAndPassword(auth, login, password);
            setStatus(1);
            setIsOpen(true);
        } catch(error) {
            setSTATUS(0);
            setIsOPEN(true);
            console.log(error.message);
        }
    }

    // Auth an exist user
    const logIn = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, login, password);
            setStatus(1);
            setIsOpen(true);
        } catch (error) {
            setSTATUS(0);
            setIsOPEN(true);
            console.log(error.message);
        }
    }

    return (
        <div className="auth__type__frame">
            <div className="register__frame">
                <div className="left__content">
                    <img className="user__icon" id="user" src={account} alt="Пользователь"/>
                    <p className="register__text">{type === "register" ? "Зарегистрироваться" : "Авторизоваться"}</p>
                </div>
                <div className={`icon__frame ${showForm ? "active__select" : ""}`} onClick={toggleForm}>
                    <img className="arrow__icon" src={arrow} alt="Развернуть"/>
                </div>
            </div>
            <div className={`form__frame ${showForm ? "active" : ""}`}>
                <form className="form">
                    <div className="labels__frame">
                        {type === "register" && <label className="label" htmlFor="1">ФИО</label>}
                        <label className="label" htmlFor="2">Эл. Почта</label>
                        <label className="label" htmlFor="3">Пароль</label>
                    </div>
                    <div className="inputs__frame">
                        {type === "register" &&
                            <input className="input"
                                   type="text"
                                   id="1"
                                   placeholder="Иванов Иван Иванович"
                                   onChange={(e) => {
                                       setName(e.target.value)
                                   }}
                            />
                        }
                        <input className="input"
                               type="email"
                               id="2"
                               placeholder="user@gmail.com"
                               onChange={(e) => {
                                   setLogin(e.target.value)
                               }}
                        />
                        <input className="input"
                               type="password"
                               id="3"
                               placeholder="password123"
                               onChange={(e) => {
                                   setPassword(e.target.value)
                               }}
                        />
                    </div>
                    <div className="button__frame">
                        <Button content="Войти в аккаунт" onEvent={e => (
                            type === "register" ? register(e) : logIn(e)
                        )}/>
                    </div>
                </form>
            </div>
            <ModalStatus isOpen={isOPEN}
                         setIsOpen={setIsOPEN}
                         status={STATUS}
            />
        </div>
    )
}

export default AuthSelect;