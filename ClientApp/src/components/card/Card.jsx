import React from "react";
import './Card.css';
import chromatica from '../../assets/records/Chromatica.png';
import heart from '../../assets/heart-icon.svg';
import play from '../../assets/play-icon.svg';

function Card() {
    return(
        <div className="service__card">
            <div className="image__group">
                <img className="record__image" src={chromatica} alt="Изображение"/>
                <div className="heart__frame">
                    <img className="heart__icon" src={heart} alt="В избранное"/>
                </div>
            </div>
            <div className="content__info">
                <div className="content__heading">
                    <p className="vinyls__name">Chromatica / 2020</p>
                    <p className="vinyls__author">Lady Gaga</p>
                </div>
                <p className="vinyls__cost">$84</p>
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