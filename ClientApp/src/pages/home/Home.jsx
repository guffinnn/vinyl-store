import React from 'react';
import './Home.css';
import Header from "../../components/header/Header";
import Preview from "../../components/preview/Preview";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import {RECORDS} from "../../assets/records/records";

function Home() {
    return(
        <>
            <Header>Vinyl records</Header>
            <main className="main">
                <Preview />
                <section className="catalog__section">
                    <h2 className="h2">НОВИНКИ</h2>
                    <div className="catalog__frame">
                        <div className="catalog__frame__fluid">
                            {RECORDS.map((item, index) => (
                                <Card record={item} />
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
