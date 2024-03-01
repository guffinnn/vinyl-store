import React from "react";
import './Account.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AuthSelect from "../../components/authSelect/AuthSelect";

function Account() {
    return (
        <>
            <Header>Account</Header>
            <main className="main" id="account">
                <AuthSelect />
            </main>
            <Footer />
        </>
    );
}

export default Account;