import React, {useState} from "react";
import './Heart.css';
import heart from "../../assets/heart-icon.svg";
import active from "../../assets/heart-active-icon.svg";

function Heart({ status }) {
    // Storage a user like status
    const [like, setLike] = useState(status);

    return like ? (
        <div className="heart__frame" onClick={() => setLike(0)}>
            <img className="heart__icon disable" src={heart} alt="Добавить в избранное"/>
        </div>
    ) : (
        <div className="heart__frame active" onClick={() => setLike(1)}>
            <img className="heart__icon" src={active} alt="Убрать из избранного"/>
        </div>
    );
}

export default Heart;