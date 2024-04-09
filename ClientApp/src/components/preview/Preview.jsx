import React from "react";
import './Preview.css';
import { RECORDS } from '../../assets/records/records';

function Preview() {

    return (
        <section className="section" id="prev">
            <div className="section__content">
                <div className="content__text">
                    <p className="preview__head">{RECORDS.artist} / {RECORDS.year}</p>
                    <div className="preview__title">
                        <p className="title__text">{RECORDS.name}</p>
                    </div>
                    <p className="preview__info">{RECORDS.description}</p>
                    <p className="preview__cost">{RECORDS.price}</p>
                </div>
                <div className="content__button">
                    <a className="add_to_cart">Добавить в корзину</a>
                </div>
            </div>
            <div className="vinyl">
                <img className="vinyl__image" src={RECORDS.image} alt="Пластинка" />
            </div>
        </section>
    );
}

export default Preview;