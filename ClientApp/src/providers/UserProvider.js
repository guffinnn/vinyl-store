import React, { useState, createContext } from 'react';

// Use hook - context
export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};