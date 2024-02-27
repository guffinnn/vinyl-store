import React from "react";
import './Catalog.css';
import '../home/Home.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchBox from "../../components/searchBox/SearchBox";
import Card from "../../components/card/Card";
import Heart from "../../components/heart/Heart";
import {RECORDS} from "../../assets/records/records.";

function Catalog() {
    return (
        <>
            <Header>Catalog</Header>
            <main className="main" id="main">
                <section className="catalog">
                    <SearchBox/>
                    <div className="catalog__group">
                        <div className="catalog__group__fluid">
                            {RECORDS.map((item, index) => (
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