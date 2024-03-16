import React, {useState} from "react";
import './Card.css';
import play from '../../assets/play-icon.svg';

function Card({ record, children }) {
    // Storage loading image process for output skeleton
    const [isLoading, setIsLoading] = useState(true);

    return(
        <div className="service__card">
            <div className="image__group">
                {isLoading && <div className="skeleton"></div>}
                <img
                    className="record__image"
                    src={record.image}
                    alt={"Винил"}
                    onLoad={() => setIsLoading(false)}
                    style={{display: isLoading ? 'none' : 'block'}}
                />
                {children}
            </div>
            <div className="content__info">
                <div className="content__heading">
                    <p className="vinyls__name">{record.name} / {record.year}</p>
                    <p className="vinyls__author">{record.artist}</p>
                </div>
                <p className="vinyls__cost">{record.genre}</p>
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