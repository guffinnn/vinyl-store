import React, { useState, createContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase";
import { getVinylsFrom, LIKES, getPayments, getUserName, getUserID } from '../pages/api';

 

// Use hook - context
export const UserContext = createContext();

export const UserProvider = (props) => {
    // Storage a user status
    const [user, setUser] = useState(null);
    // Storage user initials
    const [name, setName] = useState("");
    // Storage userID from database
    const [userID, setUserID] = useState(null);
    // Storage a likes
    const [likes, setLikes] = useState([]);
    // Storage a user credentials
    const [payments, setPayments] = useState([]);
    // Storage a user orders history
    const [orders, setOrders] = useState([]);
    // Storage status of loading data from API
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAuthorization();
    }, []);

    useEffect(() => {
        if (user) {
            settingValues();
        }
    }, [user]);

    function checkAuthorization() {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }

    async function settingValues() {
        const userName = getUserName(user),
              userID = await getUserID(user),
              payments = getPayments(user),
              likes = getVinylsFrom(LIKES);

        console.log(userID);

        const ORDERS = await `Users/${userID}/Orders`; 
        const orders = getVinylsFrom(ORDERS);

        console.log(orders);

        const values = await Promise.all([userName, userID, payments, likes, orders]);

        setName(values[0]);
        setUserID(values[1]);
        setPayments(values[2]);
        setLikes(values[3]);
        setOrders(values[4]);

        setIsLoading(false);
    }

    return (
        <UserContext.Provider value={{ user, name, likes, payments, orders }}>
            {props.children}
        </UserContext.Provider>
    );
};