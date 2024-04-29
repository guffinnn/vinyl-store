import React, {useContext, useEffect, useCallback, useState} from 'react';
import './Home.css';
import Header from "../../components/header/Header";
import Preview from "../../components/preview/Preview";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import { CartContext } from '../../providers/CartProvider';
import { RecordContext } from '../../providers/RecordProvider';
import { getVinylsFrom, ALBUMS } from '../api';

function Home() {
    // Storage a cart status
    const [cart, setCart] = useContext(CartContext);
    // Storage a records
    const [records, setRecords] = useContext(RecordContext);
    // Strorage status when page is loading
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        settingValues();

        setIsLoading(false);
    }, []);

    const settingValues = async () => {
        const vinyls = await getVinylsFrom(ALBUMS);

        setRecords(vinyls);
    }

    const addToCart = useCallback((record) => {
        setCart(prevCart => [...prevCart, record]);
    }, [setCart]);

    return !isLoading && (
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
