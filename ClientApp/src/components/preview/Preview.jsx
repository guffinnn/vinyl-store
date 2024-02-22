import React from "react";
import './Preview.css';
import BTW from '../../assets/records/BTW.png';

function Preview() {
    return (
        <section className="section">
            <div className="section__content">
                <div className="content__text">
                    <p className="preview__head">LADY GAGA / 2011</p>
                    <div className="preview__title">
                        <p className="title__text">Born This Way</p>
                    </div>
                    <p className="preview__info">Lorem ipsum dolor sit amet consectetur. Lobortis pellentesque posuere cras diam tristique at lacus. Lorem ipsum dolor sit amet consectetur. Lobortis pellentesque posuere cras diam tristique at lacus.</p>
                    <p className="preview__cost">$84</p>
                </div>
                <div className="content__button">
                    <a className="add_to_cart" href={{}}>Добавить в корзину</a>
                </div>
            </div>
            <div className="vinyl">
                <img className="vinyl__image" src={BTW} alt="Пластинка" />
            </div>
        </section>
    );
}

export default Preview;