import React, {useState, useEffect} from "react";
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from "../../firebase";
import './Account.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AuthSelect from "../../components/authSelect/AuthSelect";
import Button from "../../components/button/Button";
import ModalStatus from "../../components/modalStatus/ModalStatus";

function Account() {
    // Storage user login status
    const [user, setUser] = useState({});
    // Storage modal view status
    const [isOpen, setIsOpen] = useState(false);
    // Storage status of modal
    const [status, setStatus] = useState(1);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setStatus(1);
                setIsOpen(true);
            } else {
                setUser(null);
            }
        });
    }, []);

    // Exit from user account
    const logOut = async (e) => {
        e.preventDefault();
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header>Account</Header>
            <main className="main" id="account">
                {user ? (
                    <>
                        <h1>{user.email}</h1>
                        <div className="button__frame">
                            <Button content="Выйти из аккаунта" onEvent={e => logOut(e)}/>
                        </div>
                        <ModalStatus isOpen={isOpen}
                                     setIsOpen={setIsOpen}
                                     status={status}
                        />
                    </>
                ) : (
                    <div className="authes">
                        <AuthSelect type="register"
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    status={status}
                                    setStatus={setStatus}
                        />
                        <AuthSelect type="login"
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    status={status}
                                    setStatus={setStatus}
                        />
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default Account;