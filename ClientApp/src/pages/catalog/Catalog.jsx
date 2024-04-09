import React, { useState, useEffect } from "react";
import './Catalog.css';
import '../home/Home.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchBox from "../../components/searchBox/SearchBox";
import Card from "../../components/card/Card";
import Heart from "../../components/heart/Heart";

function Catalog() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(' https://localhost:44458/api/Albums')
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json();
                } else {
                    throw new TypeError("Oops, we haven't got JSON!");
                }
            })
            .then(data => setCards(data))
            .catch(error => console.error('Ошибка:', error));
    }, []);

    return (
        <>
            <Header>Catalog</Header>
            <main className="main" id="main">
                <section className="catalog">
                    <SearchBox />
                    <div className="catalog__group">
                        <div className="catalog__group__fluid">
                            {cards.sort((a, b) => {
                                return b.year - a.year;
                            }).map((item, index) => (
                                <Card record={item} image={index}>
                                    <Heart status={1} />
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Catalog;