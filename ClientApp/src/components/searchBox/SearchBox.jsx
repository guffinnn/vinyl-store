import React, { memo } from "react";
import './SearchBox.css';
import search from '../../assets/search-icon.svg';

const SearchBox = memo(() => {
    return (
        <div className="search__input">
            <input className="search" type="text" placeholder="Поиск" />
            <div className="search__frame">
                <img className="search__image" src={search} alt="Искать" />
            </div>
        </div>
    );
});

export default SearchBox;