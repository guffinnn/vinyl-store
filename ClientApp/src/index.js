import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from "./providers/CartProvider";
import { UserProvider } from "./providers/UserProvider";
import { RecordProvider } from './providers/RecordProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecordProvider>
        <UserProvider>
            <CartProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </CartProvider>
        </UserProvider>
    </RecordProvider>
);