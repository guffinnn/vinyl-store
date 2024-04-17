import React, { useState, createContext } from 'react';

// Use hook - context
export const PaymentsContext = createContext();

export const PaymentsProvider = (props) => {
    const [payments, setPayments] = useState([]);

    return (
        <PaymentsContext.Provider value={[payments, setPayments]}>
            {props.children}
        </PaymentsContext.Provider>
    );
};