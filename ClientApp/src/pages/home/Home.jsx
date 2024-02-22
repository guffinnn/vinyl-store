import React from 'react';
import './Home.css';
import Header from "../../components/header/Header";
import Preview from "../../components/preview/Preview";

function HomePage() {
    return(
        <>
            <Header />
            <main>
                <Preview />
            </main>
        </>
    );
}

export default HomePage;
