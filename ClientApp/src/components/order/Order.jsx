import React, { memo, useContext, useEffect } from "react";
import './Order.css';
import { RecordContext } from "../../providers/RecordProvider";

const Order = memo(({ order }) => {
    const [records] = useContext(RecordContext);

    let recordInfo = getRecordInfo();

    function getRecordInfo() {
        const record = records.find((record) => record.albumID === order.albumID);

        // Formatting date string
        const dateString = order.orderDate;
        const dateParts = dateString.split('T')[0].split('-');
        const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;

        return record ? {
            image: record.image,
            price: record.price,
            date: formattedDate // Date of order, NOT RECORD
        } : '';
    }

    return (
        <div className="order__frame">
            <div className="order__info">
                <img
                    className="order__image"
                    src={recordInfo.image}
                    alt="Пластинка"
                />
                <div className="order__text">
                    <p className="order__name">{order.status}</p>
                    <p className="order__date">{recordInfo.date}</p>
                </div>
            </div>
            <p className="order__cost">{recordInfo ? `-${recordInfo.price}` : null}</p>
        </div>
    );
});

export default Order;