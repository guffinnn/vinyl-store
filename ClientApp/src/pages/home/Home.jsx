import React from 'react';
import './Home.css';
import Header from "../../components/header/Header";
import Preview from "../../components/preview/Preview";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";

function HomePage() {
    return(
        <>
            <Header />
            <main className="main">
                <Preview />
                <section className="catalog__section">
                    <h2 className="h2">НОВИНКИ</h2>
                    <div className="catalog__frame">
                        <div className="catalog__frame__fluid">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
