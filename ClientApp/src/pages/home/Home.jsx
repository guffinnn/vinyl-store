import React, {useContext, useEffect, useCallback, useState} from 'react';
import './Home.css';
import Header from "../../components/header/Header";
import Preview from "../../components/preview/Preview";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import { CartContext } from '../../providers/CartProvider';
import { RecordContext } from '../../providers/RecordProvider';

function Home() {
    // Storage a cart status
    const [cart, setCart] = useContext(CartContext);
    // Storage a records
    const [records, setRecords] = useContext(RecordContext);
    
    useEffect(() => {
        getAlbums();
    }, []);

    const getAlbums = useCallback(() => {
        fetch(' https://localhost:44458/api/Albums')
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json();
                } else {
                    throw new TypeError("Oops, we haven't got JSON!");
                }
            })
            .then(data => setRecords(data))
            .catch(error => console.error('Ошибка:', error));
    }, [setRecords]);

    const addToCart = useCallback((record) => {
        setCart(prevCart => [...prevCart, record]);
    }, [setCart]);

    return (
        <>
            <Header>Vinyl records</Header>
            <main className="main">
                <Preview />
                <section className="catalog__section">
                    <h2 className="h2">НОВИНКИ</h2>
                    <div className="catalog__frame">
                        <div className="catalog__frame__fluid">
                            {records.sort((a, b) => {
                                return b.year - a.year;
                            }).map((item, index) => (
                                <Card key={index} record={item} onEvent={() => addToCart(item)} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;
