import React from "react";
import './ModalStatus.css';
import success from '../../assets/success-icon.svg';
import error from '../../assets/error-icon.svg';

function ModalStatus({ isOpen, setIsOpen, status }) {
    return isOpen ? (
        <>
            <div className="modal__container">
                <div className="modal__content">
                    <div className="status__icon">
                        <img className="status__image" src={status ? success : error} alt="Статус" />
                    </div>
                    <div className="modal__text">
                        <p className="text__head">{status ? "Вход выполнен" : "Вход не выполнен"}</p>
                        <p className="text__info">{status ? "Вы успешно вошли в аккаунт" : "Введенные данные неверны"}</p>
                    </div>
                </div>
            </div>
            <div className="modal__wrapper" onClick={() => setIsOpen(false)}></div>
        </>
    ) : null;
}

export default ModalStatus;