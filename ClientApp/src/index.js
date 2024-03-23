import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CartProvider} from "./components/cartProvider/CartProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </CartProvider>
);