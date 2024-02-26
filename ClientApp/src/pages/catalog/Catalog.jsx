import React from "react";
import './Catalog.css';
import '../home/Home.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchBox from "../../components/searchBox/SearchBox";
import Card from "../../components/card/Card";

function Catalog() {
    return (
        <>
            <Header>Catalog</Header>
            <main className="main" id="main">
                <section className="catalog">
                    <SearchBox/>
                    <div className="catalog__group">
                        <div className="catalog__group__fluid">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Catalog;