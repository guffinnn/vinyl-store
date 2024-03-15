import React from "react";
import './Position.css';
import * as Img from "../../assets/records/records";
import minus from '../../assets/minus-icon.svg';
import plus from '../../assets/plus-icon.svg';

function Position({ record, image }) {
    return (
        <div className="position__frame">
            <div className="pos__img__group">
                <img className="pos__record__image" src={Img[`img${image + 1}`]} alt="Изображение"/>
            </div>
            <div className="position__content">
                <div className="content__heading">
                    <p className="vinyls__name">{record.name}</p>
                    <p className="vinyls__author">{record.author}</p>
                    <p className="vinyls__cost" id="price__text">{record.price}</p>
                </div>
                <div className="content__counter">
                    <div className="minus__button">
                        <img className="minus__icon" src={minus} alt="Уменьшить на 1" />
                    </div>
                    <div className="counter__frame">
                        <p className="count__text">1</p>
                    </div>
                    <div className="plus__button">
                        <img className="plus__icon" src={plus} alt="Увеличить на 1"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Position;