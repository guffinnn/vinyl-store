import React from "react";
import './Preview.css';

function Preview() {
    return (
        <section className="section" id="prev">
            <div className="section__content">
                <div className="content__text">
                    <p className="preview__head">ARIANA GRANDE / 2024</p>
                    <div className="preview__title">
                        <p className="title__text">eternal sunshine</p>
                    </div>
                    <p className="preview__info">Lorem ipsum dolor sit amet consectetur. Lobortis pellentesque posuere cras diam tristique at lacus. Lorem ipsum dolor sit amet consectetur. Lobortis pellentesque posuere cras diam tristique at lacus.</p>
                    <p className="preview__cost">$84</p>
                </div>
                <div className="content__button">
                    <a className="add_to_cart" href={{}}>Добавить в корзину</a>
                </div>
            </div>
            <div className="vinyl">
                <img className="vinyl__image" src={"https://i.scdn.co/image/ab67616d0000b2738b58d20f1b77295730db15b4"} alt="Пластинка" />
            </div>
        </section>
    );
}

export default Preview;