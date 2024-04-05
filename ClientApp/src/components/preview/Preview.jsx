import React from "react";
import './Preview.css';
import { RECORDS } from "../../assets/records/records";

function Preview() {
    let searchName = 'COWBOY CARTER';
    let index = RECORDS.findIndex(el => el.name === searchName);

    return (
        <section className="section" id="prev">
            <div className="section__content">
                <div className="content__text">
                    <p className="preview__head">{RECORDS[index].artist} / {RECORDS[index].year}</p>
                    <div className="preview__title">
                        <p className="title__text">{RECORDS[index].name}</p>
                    </div>
                    <p className="preview__info">Lorem ipsum dolor sit amet consectetur. Lobortis pellentesque posuere cras diam tristique at lacus. Lorem ipsum dolor sit amet consectetur. Lobortis pellentesque posuere cras diam tristique at lacus.</p>
                    <p className="preview__cost">$84</p>
                </div>
                <div className="content__button">
                    <a className="add_to_cart">Добавить в корзину</a>
                </div>
            </div>
            <div className="vinyl">
                <img className="vinyl__image" src={ RECORDS[index].image} alt="Пластинка" />
            </div>
        </section>
    );
}

export default Preview;