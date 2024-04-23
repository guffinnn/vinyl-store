import React, { useState } from "react";
import './SearchBox.css';
import search from '../../assets/search-icon.svg';

function SearchBox({ records, setFilteredRecords }) {
    // Storage a user input string
    const [userInput, setUserInput] = useState("");

    const changeHandle = (e) => {
        const input = e.target.value;
        setUserInput(input);

        const filtered = filterRecordsByInput();
        setFilteredRecords(filtered);
    }

    function filterRecordsByInput() {
        return (
            records.filter((record) => {
                return record.name.toLowerCase().includes(userInput.toLowerCase());
            })
        );
    }

    return (
        <div className="search__input">
            <input
                className="search"
                type="text"
                placeholder="Поиск"
                onChange={e => changeHandle(e)}
            />
            <div className="search__frame">
                <img className="search__image" src={search} alt="Искать" />
            </div>
        </div>
    );
}

export default SearchBox;