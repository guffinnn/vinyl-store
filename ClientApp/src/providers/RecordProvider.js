import React, { useState, useEffect, createContext } from 'react';
import { getVinylsFrom, ALBUMS } from '../pages/api';

// Use hook - context
export const RecordContext = createContext();

export const RecordProvider = (props) => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        settingValues();
    }, []);

    const settingValues = async () => {
        const vinyls = await getVinylsFrom(ALBUMS);

        setRecords(vinyls);
    }

    return (
        <RecordContext.Provider value={[records, setRecords]}>
            {props.children}
        </RecordContext.Provider>
    );
};