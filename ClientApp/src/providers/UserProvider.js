import React, { useState, createContext, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase";
import { getVinylsFrom, LIKES, getPayments, getUserName, getUserID } from '../pages/api';
import { RecordContext } from './RecordProvider';

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
    // Storage global records (for likes)
    const [records, setRecords] = useContext(RecordContext);

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

        const ORDERS = await `Orders/User/${userID}`; 
        const orders = getVinylsFrom(ORDERS);

        const values = await Promise.all([userName, userID, payments, likes, orders]);

        setName(values[0]);
        setUserID(values[1]);
        setPayments(values[2]);

        const filteredLikes = values[3].map((item, index) => {
            let album = records.find(album => album.albumID === item.albumID);
            album.likeID = item.likeID;
            return album;
        });
        setLikes(filteredLikes);

        setOrders(values[4]);

        setIsLoading(false);
    }

    return (
        <UserContext.Provider value={{ user, name, likes, payments, orders }}>
            {props.children}
        </UserContext.Provider>
    );
};