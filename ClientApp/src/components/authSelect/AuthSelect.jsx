import React, {useState} from "react";
import './AuthSelect.css';
import account from  '../../assets/account-image.png';
import arrow from '../../assets/arrow-icon.svg';
import Button from "../button/Button";

function AuthSelect() {
    // Storage a status of user click
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <div className="auth__type__frame">
            <div className="register__frame">
                <div className="left__content">
                    <img className="user__icon" src={account} alt="Пользователь" />
                    <p className="register__text">Зарегистрироваться</p>
                </div>
                <div className={`icon__frame ${showForm ? "active__select" : ""}`} onClick={toggleForm}>
                    <img className="arrow__icon" src={arrow} alt="Развернуть" />
                </div>
            </div>
            {showForm && (
                <div className="form__frame">
                    <form className="form">
                        <div className="labels__frame">
                            <label className="label" htmlFor="1">ФИО</label>
                            <label className="label" htmlFor="2">Эл. Почта</label>
                            <label className="label" htmlFor="3">Пароль</label>
                        </div>
                        <div className="inputs__frame">
                            <input className="input" type="text" id="1" placeholder="Иванов Иван Иванович"/>
                            <input className="input" type="email" id="2" placeholder="user@gmail.com"/>
                            <input className="input" type="password" id="3" placeholder="password123"/>
                        </div>
                        <div className="button__frame">
                            <Button content="Войти в аккаунт"/>
                        </div>
                    </form>
                </div>
            )}
        </div>

    )
}

export default AuthSelect;