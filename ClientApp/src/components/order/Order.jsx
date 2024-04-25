import React, { memo } from "react";
import './Order.css';

const Order = memo(({ order }) => {
    return (
        <div className="order__frame">
            <div className="order__info">
                <img className="order__image" src={`https://i.scdn.co/image/ab67616d0000b2738d68fdbc3847e8401ccb0be0`} alt="Пластинка" />
                <div className="order__text">
                    <p className="order__name">{order.status}</p>
                    <p className="order__date">{order.orderDate}</p>
                </div>
            </div>
            <p className="order__cost">{order.price ? `-${order.price}` : null}</p>
        </div>
    );
});

export default Order;