import React, {useState, useContext} from "react";
import './Position.css';
import minus from '../../assets/minus-icon.svg';
import plus from '../../assets/plus-icon.svg';
import { CartContext } from "../../providers/CartProvider";

function Position({ record, onChange }) {
    // Storage a number of record
    const [count, setCount] = useState(record.count);
    // Storage a cart status
    const [cart, setCart] = useContext(CartContext);

    function decreaseCount() {
        // Delete record while count now is 1
        if (record.count <= 1) {
            setCart(cart.filter(item => item !== record));
            onChange()
        } else {
            record.count -= 1;
            updateCount();
        }
    };

    function increaseCount() {
        record.count += 1;
        updateCount();
    };

    function updateCount() {
        setCount(record.count);
        onChange();
    }

    return (
        <div className="position__frame">
            <div className="pos__img__group">
                <img className="pos__record__image" src={record.image} alt="Изображение"/>
            </div>
            <div className="position__content">
                <div className="content__heading">
                    <p className="vinyls__name">{record.name}</p>
                    <p className="vinyls__author">{record.artist}</p>
                    <p className="vinyls__cost" id="price__text">{record.price}$</p>
                </div>
                <div className="content__counter">
                    <div className="minus__button" onClick={decreaseCount}>
                        <img
                            className="minus__icon"
                            src={minus}
                            alt="Уменьшить на 1"
                        />
                    </div>
                    <div className="counter__frame">
                        <p className="count__text">{count}</p>
                    </div>
                    <div className="plus__button" onClick={increaseCount}>
                        <img
                            className="plus__icon"
                            src={plus}
                            alt="Увеличить на 1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Position;