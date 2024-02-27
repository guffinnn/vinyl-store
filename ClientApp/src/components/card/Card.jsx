import React from "react";
import './Card.css';
import play from '../../assets/play-icon.svg';
import * as Img from "../../assets/records/records.";

function Card({ record, image, children }) {
    return(
        <div className="service__card">
            <div className="image__group">
                <img className="record__image" src={Img[`img${image + 1}`]} alt="Изображение"/>
                {children}
            </div>
            <div className="content__info">
                <div className="content__heading">
                    <p className="vinyls__name">{record.name} / {record.year}</p>
                    <p className="vinyls__author">{record.author}</p>
                </div>
                <p className="vinyls__cost">{record.price}</p>
            </div>
            <div className="spotify__link">
                <a className="music__link" href={{}}>Слушать в Spotify</a>
                <div className="play__frame">
                    <img className="play__icon" src={play} alt="Слушать" />
                </div>
            </div>
            <div className="add_to_cart__button">
                <a className="button__text" href={{}}>Добавить в корзину</a>
            </div>
        </div>
    );
}

export default Card;