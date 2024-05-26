import React, { useState, useEffect, createContext } from 'react';
import { getVinylsFrom, ALBUMS } from '../pages/api';
import { RECORDS } from '../assets/exports/records';

// Use hook - context
export const RecordContext = createContext();

export const RecordProvider = (props) => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        settingValues();
    }, []);

    const settingValues = async () => {
        const vinyls = await getVinylsFrom(ALBUMS);

        if (vinyls && vinyls.length > 0) {
            setRecords(vinyls);
        } else {
            setRecords([RECORDS]);
        }
    }

    return (
        <RecordContext.Provider value={[records, setRecords]}>
            {props.children}
        </RecordContext.Provider>
    );
};