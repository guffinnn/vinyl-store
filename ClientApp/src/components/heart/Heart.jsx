import React, {useEffect, useState, useContext} from "react";
import './Heart.css';
import heart from "../../assets/heart-icon.svg";
import active from "../../assets/heart-active-icon.svg";
import { postLike, deleteLike, getUserID, getVinylsFrom, LIKES } from '../../pages/api';
import { UserContext } from "../../providers/UserProvider";
import { RecordContext } from "../../providers/RecordProvider";

function Heart({ album }) {
    // Storage a user like status
    const [isLiked, setIsLiked] = useState(1);
    const { likes, setLikes, user } = useContext(UserContext);
    const [records, setRecords] = useContext(RecordContext);

    useEffect(() => {
        checkLike();
    }, []);

    function checkLike() {
        const isLiked = likes.find(likeItem => likeItem.albumID === album.albumID);
        setIsLiked(isLiked ? 0 : 1);
    }

    const addToLikes = async () => {
        // Not liked, add to favorites
        let userID = await getUserID(user);

        postLike(userID, album.albumID); // Call post API function
        likes.push(album);

        setIsLiked(prevLike => (prevLike === 0 ? 1 : 0));
    }

    const removeFromLikes = async () => {
        // Always liked, delete from favourites
        const likeToRemove = likes.find(likeItem => likeItem.albumID === album.albumID);
        deleteLike(likeToRemove.likeID); // Call delete API function with the correct likeID

        const favourites = await Promise.all([getVinylsFrom(LIKES)]);
        const filteredLikes = favourites[0].map((item, index) => {
            let album = records.find(album => album.albumID === item.albumID);
            album.likeID = item.likeID;
            return album;
        });

        /*
        TODO: Add way to delete local likes

        setLikes(filteredLikes);
        */

        setIsLiked(prevLike => (prevLike === 0 ? 1 : 0));
    }

    return isLiked ? (
        <div className="heart__frame" onClick={addToLikes}>
            <img className="heart__icon disable" src={heart} alt="Добавить в избранное"/>
        </div>
    ) : (
        <div className="heart__frame active" onClick={removeFromLikes}>
            <img className="heart__icon" src={active} alt="Убрать из избранного"/>
        </div>
    );
}

export default Heart;