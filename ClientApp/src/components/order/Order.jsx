import React from "react";
import './Order.css';
import * as Img from '../../assets/exports/data';

function Order({ order }) {
    return (
        <div className="order__frame">
            <div className="order__info">
                <img className="order__image" src={Img[`img${2}`]} alt="Пластинка" />
                <div className="order__text">
                    <p className="order__name">{`Заказ ${order.name}`}</p>
                    <p className="order__date">{order.date}</p>
                </div>
            </div>
            <p className="order__cost">–{order.cost}</p>
        </div>
    );
}

export default Order;