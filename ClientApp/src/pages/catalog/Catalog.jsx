import React, { useState, useEffect, useContext } from "react";
import './Catalog.css';
import '../home/Home.css';
import catalog from '../../assets/catalog-icon.svg';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchBox from "../../components/searchBox/SearchBox";
import Card from "../../components/card/Card";
import Heart from "../../components/heart/Heart";
import { RecordContext } from "../../providers/RecordProvider";

function Catalog() {
    // Storage a records
    const [records, setRecords] = useContext(RecordContext);

    return records.length > 0 ? (
        <>
            <Header>Catalog</Header>
            <main className="main" id="main">
                <section className="catalog">
                    <SearchBox />
                    <div className="catalog__group">
                        <div className="catalog__group__fluid">
                            {records.sort((a, b) => {
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
            <Footer />  
        </>
    ) : (
        <>
            <Header>Catalog</Header>
            <main className="main" id="cart">
                <section className="cart">
                    <div className="cart__frame">
                        <div className="cart__fluid">
                            <div className="error__container">
                                <div className="error__image">
                                    <img alt="Error" src={catalog} className="image__content" />
                                </div>
                                <div className="error__info">
                                    <p className="error__head">Каталог пуст</p>
                                    <p className="error__text">Для обновления каталога перейдите на главную страницу</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Catalog;