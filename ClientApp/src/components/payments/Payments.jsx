import React from "react";
import './Payments.css';
import card from '../../assets/card-icon.svg';

function Payments() {
    return (
        <div className="payments">
            <div className="payments__fluid">
                <div className="add_card__frame">
                    <div className="add_card__background">
                        <div className="add_card__content">
                            <div className="card-icon__frame">
                                <img className="card-icon" src={card} alt="Карта"/>
                            </div>
                            <p className="add_card__text">Добавить способ оплаты</p>
                        </div>
                    </div>
                </div>
                <div className="card__frame">
                    <div className="card__background">
                        <p className="card__number">1111 **** **** 1111</p>
                        <p className="card__user">IVANOV IVAN</p>
                    </div>
                </div>
                <div className="card__frame">
                    <div className="card__background">
                        <p className="card__number">1111 **** **** 1111</p>
                        <p className="card__user">IVANOV IVAN</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payments;