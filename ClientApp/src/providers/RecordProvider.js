import React, { useState, createContext } from 'react';

// Use hook - context
export const RecordContext = createContext();

export const RecordProvider = (props) => {
    const [records, setRecords] = useState([]);

    return (
        <RecordContext.Provider value={[records, setRecords]}>
            {props.children}
        </RecordContext.Provider>
    );
};