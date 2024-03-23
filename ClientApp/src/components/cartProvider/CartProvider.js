import React, { useState, createContext } from 'react';

// Use hook - context
export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    );
};