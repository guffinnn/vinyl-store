import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from "./providers/CartProvider";
import { UserProvider } from "./providers/UserProvider";
import { PaymentsProvider } from "./providers/PaymentsProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <PaymentsProvider>
            <CartProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </CartProvider>
        </PaymentsProvider>
    </UserProvider>
);