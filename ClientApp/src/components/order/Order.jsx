import React, { useContext } from "react";
import './Order.css';
import { RecordContext } from "../../providers/RecordProvider";

const ORDERS = [
    {
        orderID: 17,
        albumID: 36 // Future Nostalgia
    },
    {
        orderID: 18,
        albumID: 40 // Radical Optimism
    },
    {
        orderID: 19,
        albumID: 39 // Scarlet 2 CLAUDE
    },
    {
        orderID: 20,
        albumID: 38 // COWBOY CARTER
    },
    {
        orderID: 21,
        albumID: 31 // Chromatica
    },
    {
        orderID: 22,
        albumID: 32 // Dawn of Chromatica
    },
    {
        orderID: 23,
        albumID: 36 // Future Nostalgia
    },
    {
        orderID: 24,
        albumID: 40 // Radical Optimism
    },
];

const Order = ({ order }) => {
    const [records] = useContext(RecordContext);

    let recordInfo = getRecordInfo();
    
    function getRecordInfo() {
        const object = ORDERS.filter((item) => item.orderID === order.orderID);
        const record = records.filter((item) => item.albumID === object[0].albumID);

        // Formatting date string
        const dateString = order.orderDate;
        const dateParts = dateString.split('T')[0].split('-');
        const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;

        return record ? {
            image: record[0].image,
            price: record[0].price,
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
};

export default Order;